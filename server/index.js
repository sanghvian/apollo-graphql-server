const { ApolloServer} = require('apollo-server')
const { mainCards, categories, animals } = require('./db')
const {typeDefs} = require('./schema.js')


const resolvers = {
    Query: {
        categories: () => categories,
        mainCards: () => mainCards,
        animals: () => animals,
        animal: (parent, args, ctx, info) => {
            const animal = animals.find((animal) => {
                return animal.slug == args.slug
            })
            return animal
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Server read at ${url}`)
})