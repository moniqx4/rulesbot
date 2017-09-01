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
    title: 'Interceptions I',
    color: '#2FA44F',
    text: 'If QB gets 4 interceptions in a game, user must bench them for the remainder and bring in their backup.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Interceptions II',
    color: '#E3E4E6',
    text: 'If QB has more then 32 interceptions anytime during the season, they must be benched for the remainder of the season. \n',
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

module.exports = { pattern: /interceptions/ig, handler: handler }
