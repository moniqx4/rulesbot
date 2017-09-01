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
    title: 'Playbook Rules',
    color: '#2FA44F',
    text: 'NO Custom Playbooks. All coaches are expected to use their teams appointed base offense and defense playbooks for 1st season.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Playbook Rules II',
    color: '#E3E4E6',
    text: 'After 1st season, you may drop your playbook to pickup a generic playbook. Or pick one not in use, contact Division Rep for more details.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Playbook Rules III',
    color: '#E3E4E6',
    text: 'In the pre-game screen, show the opponent your playbooks before clicking ready to start.\n',
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

module.exports = { pattern: /playbook/ig, handler: handler }
