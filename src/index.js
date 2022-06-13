const express =  require('express')
const useRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => {
  res.send('HELLO NO000DE JS!!!')
})

app.use(express.json())
app.use('/api', useRouter)



app.listen(PORT, () => console.log('Server was started on port: ' + PORT))

console.log('Hello world!')