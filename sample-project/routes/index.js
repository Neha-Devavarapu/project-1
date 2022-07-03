// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const profiles = {
 sjobs: {
  image: '/images/sjobs.jpg',
  name: 'steve jobs',
  Username: 'sjobs',
  company: 'apple',
  languages: ['objective-c','swift','c++']
 },
bgates: {
  image: '/images/bgates.jpg',
  name: 'billgates',
  Username: 'bgates',
  company: 'microsoft', 
  languages: ['c','c#','java']
 }

}

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})
router.get('/profiles', (req, res) => {
  const keys = Object.keys(profiles)
  const list = []
  keys.forEach(key => {
    list.push(profiles[key])
  })

  const data = {
    profiles: list,
    timestamp: req.timestamp
  }
  res.render('profiles', data)
})
router.post('/createprofile', (req, res) => {
  const body = req.body
  body['languages'] = req.body.languages.split(', ')
  profiles[body.username] = body
  res.json({
    confirmation: 'success',
    data: profiles[body.username]
  })
})
router.post('/addprofile', (req, res) => {
  const body = req.body
  body['languages'] = req.body.languages.split(', ')
  profiles[body.username] = body
  res.redirect('/profile/'+body.username)
})
router.get('/query', (req, res) => {
  const name = req.query.name
  const occupation = req.query.occupation
  const data = {
    name: name,
    occupation: occupation
  }
  res.render('profile',data)
})

router.get('/:path', (req, res) => {
  const path = req.params.path
  res.json({
    data: path
  })
})
router.get('/:profile/:username', (req, res) => {
  const profile = req.params.profile
  const username = req.params.username
  const currentprofile = profiles[username]
  if (currentprofile==null){
    res.json({
     confirmation: 'fail',
     message: 'Profile' + username + 'not found'
     
    })
    return
  }
  currentprofile.timestamp = req.timestamp
  res.render('profile',currentprofile)
})
module.exports = router
