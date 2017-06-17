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
    title: 'Trade Rule I',
    color: '#2FA44F',
    text: 'All trades MUST be submitted to Division leader and approved BEFORE you can make trade.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Trade Rule II',
    color: '#E3E4E6',
    text: 'There is a max of 2 trades per season for veterans. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Trade Rule III',
    color: '#E3E4E6',
    text: 'New coaches can NOT propose or accept trades their 1st season in MSPA. \n',
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

module.exports = { pattern: /trades/ig, handler: handler }
