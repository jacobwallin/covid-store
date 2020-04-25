const router = require('express').Router()
const {Order, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/account', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: [{model: Order, include: [{all: true}]}]
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
router.get('/:userId', async (req, res, next) => {
  try {
    await User.findByPk(req.params.userId).then(user => {
      if (!user) {
        return res.sendStatus(404)
      }
      res.send(user)
    })
  } catch (err) {
    next(err)
  }
})
router.put('/:userId', async (req, res, next) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.userId
      },
      returning: true
    }).then(() => {
      res.sendStatus(204)
    })
  } catch (err) {
    next(err)
  }
})
