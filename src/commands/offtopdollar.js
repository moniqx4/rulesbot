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
    title: 'QB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 35 MIL/PER YR - Salary 25 MIL/PER YR Bonus 10 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'RB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 14.5 MIL/PER YR - Salary 10.15 MIL/PER YR Bonus 4.35 MIL\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'FB - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 5.25 MIL/PER YR - Salary 3.75 MIL/PER YR Bonus 1.5 MIL \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'WR - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 18 MIL/PER YR - Salary 12.6 MIL/PER YR Bonus 5.4 MIL\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'TE - Top Dollar',
    color: '#2FA44F',
    text: 'Total: 10 MIL/PER YR - Salary 7 MIL/PER YR Bonus 3 MIL\n',
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

module.exports = { pattern: /offtopdollar/ig, handler: handler }
