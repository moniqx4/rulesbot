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
    title: '2 Point Conversion Rule',
    color: '#2FA44F',
    text: 'You may attempt a maximum of TWO 2-point conversions per game.  \n',
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

module.exports = { pattern: /2point/ig, handler: handler }
