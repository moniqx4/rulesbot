'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Rulesbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Special Team Rules I',
    color: '#2FA44F',
    text: 'ONE time per game a coach may attempt either an onside kick, fake field goal or fake punt.  \n',
    mrkdwn_in: ['text']
  },
   {
    title: 'Special Team Rules II',
    color: '#2FA44F',
    text: 'When receiving the ball you may not control a run blocker on punt or kickoff returns. You may only control the returner.  \n',
    mrkdwn_in: ['text']
  }  
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /special/ig, handler: handler }
