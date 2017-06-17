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
    title: 'Disconnect Rule I',
    color: '#2FA44F',
    text: 'All disconnected games will be brought to the Division Leaders attention with quarter, time, score and who was winning before the game can be replayed legally.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Disconnect Rule II',
    color: '#E3E4E6',
    text: 'Disconnect prior to half replay of game, unless agreed upon sim, or force win \n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Disconnect Rule III',
    color: '#E3E4E6',
    text: 'Disconnect after the half but before the 4th, if a team is up by more than 2 scores, has option to take force win \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Disconnect Rule IV',
    color: '#E3E4E6',
    text: 'After mid point of 4th, if a team is up by more than 2 scores (15+), team winning gets forced win \n',
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

module.exports = { pattern: /disconnect/ig, handler: handler }
