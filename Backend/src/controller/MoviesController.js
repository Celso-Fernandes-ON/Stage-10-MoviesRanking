const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MoviesController {
  async create(req,res) {
    const { title, description, rating, tags } = req.body
    const user_id = req.user.id

    if(rating < 0 || rating > 5){
      throw new AppError('A nota deve ser de 0 à 5')
    }

    const [movies_id] = await knex("movies").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        movies_id,
        name,
        user_id
      }
    })

    await knex("tags").insert(tagsInsert)

    return res.json()
  }

  async show(req,res) {
    const { id } = req.params

    const movie = await knex("movies").where({ id }).first()
    const tags = await knex("tags").where({ movies_id: id }).orderBy("name")

    return res.json({
      ...movie,
      tags,
    })
  }

  async delete(req,res){
    const { id } = req.params

    await knex("movies").where({ id }).delete()

    return res.json()
  }
  async index(req,res){
    const {title , tags} = req.query
    
    const user_id = req.user.id
    

    let movies

    if(tags){
      const filterTags = tags.split(',').map(tag => tag.trim())

      movies = await knex('tags')
      .select([
        "movies.id",
        "movies.title",
        "movies.user_id",

      ])
      .where("movies.user_id",user_id)
      .whereLike("movies.title",`%${title}%`)
      .whereIn("name",filterTags)
      .innerJoin("movies","movies.id","tags.movies_id")
      .orderBy("movies.title")

    }else{
      movies = await knex('movies')
      .where({user_id})
      .whereLike("title",`%${title}%`)
      .orderBy('title')

    }
    const userTags = await knex("tags").where({user_id})
    const moviesWithTags = movies.map(movie => {
      const moviesTags = userTags.filter(tag => (tag.movies_id === movie.id))

      return{
        ...movie,
        tags: moviesTags
      }
    })

    return res.json(moviesWithTags)
  }
}

module.exports = MoviesController