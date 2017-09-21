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
    title: 'Practice Squad I',
    color: '#2FA44F',
    text: 'Before poaching a player, you must contact the team that has them and give them opportunity to sign them. If they opt to not sign that player to active roster with 24 hours of being contacted, then you may sign them to your active roster.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Practice Squad II',
    color: '#2FA44F',
    text: 'NOT allowed to poach practice squad players from another team, unless putting them on your active roster. No poaching from one practice squad to another practice squad.  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Practice Squad III',
    color: '#2FA44F',
    text: 'During Preseason wk 4, you have 24 hours to fill up your practice squad from eligible practice squad players (unclaimed ones).  \n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Practice Squad IV',
    color: '#2FA44F',
    text: 'Practice Squad players can be signed to active roster, or active players moved to practice squad anytime. Once signed to active squad, must remain there for remainder of season.  \n',
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

module.exports = { pattern: /psq/ig, handler: handler }
