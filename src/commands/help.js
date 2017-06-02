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
    title: 'Rulesbot will help you find the rules when you need them.',
    color: '#2FA44F',
    text: '`/rules 4thdown` returns the 4thdown rules.',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Rulesbot',
    color: '#E3E4E6',
    text: '`/rules help` ... you\'re lookin at it! \n',
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

module.exports = { pattern: /help/ig, handler: handler }
