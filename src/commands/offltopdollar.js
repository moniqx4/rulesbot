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
    title: 'Tackle - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 12 MIL/PER YR - Salary 8.5 MIL/PER YR Bonus 3.5 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Guard - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 9 MIL/PER YR - Salary 6.5 MIL/PER YR Bonus 2.5 MIL\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Center - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 7 MIL/PER YR - Salary 5 MIL/PER YR Bonus 2 MIL\n',
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

module.exports = { pattern: /offltopdollar/ig, handler: handler }
