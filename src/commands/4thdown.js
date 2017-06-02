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
    title: '4th Down Rule',
    color: '#2FA44F',
    text: 'If you are on your side of the field (yard 1-49), you must punt on 4th down unless you are down by 17 points or more.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: '4th Down Rule II',
    color: '#E3E4E6',
    text: 'If the ball is on the 50 yard line or anywhere in your opponents territory and it is no greater than 4th and 1, you can go for it. This can occur ONLY IF YOUR LOSING, THE GAME IS TIED OR IF YOUR WINNING BY 2 POINTS OR LESS \n',
    mrkdwn_in: ['text']
  },  
  {
    title: '4th Down Rule III',
    color: '#E3E4E6',
    text: 'In the 4th quarter, if you are behind at all, you can go for it on 4th down anywhere on the field. Once again be realistic in your approach \n',
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

module.exports = { pattern: /4thdown/ig, handler: handler }
