const Query = {
    greeting: (parent, args, {req, res}) => {   
        // console.log(req.headers)
        res.cookie('cookieName',23, { maxAge: 900000, httpOnly: true })
        return 'Hello world!'
    },
    jobs: ()=> ([{id: '1', title:'Developer', description: 'very important job'}])
}

export default {
    Query
} 