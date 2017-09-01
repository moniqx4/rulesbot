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
    title: 'Playercontrol I',
    color: '#2FA44F',
    text: 'Usering the DL players, is only allowed at max once every 4 plays, or once every set of downs. \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Playercontrol II',
    color: '#E3E4E6',
    text: 'When playing offense, you must play as the QB to start play. \n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Playercontrol III',
    color: '#E3E4E6',
    text: 'Linebackers can not be manually moved to the DL. If the defense that is called starts them there, or if audible to show blitz is used, that is fine. \n',
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

module.exports = { pattern: /playercontrol/ig, handler: handler }
