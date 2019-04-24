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
    title: 'Kicker - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 5 MIL/PER YR - Salary 3 MIL/PER YR Bonus 2 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Punter - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 4 MIL/PER YR - Salary 2.5 MIL/PER YR Bonus 1.2 MIL\n',
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

module.exports = { pattern: /spctopdollar/ig, handler: handler }
