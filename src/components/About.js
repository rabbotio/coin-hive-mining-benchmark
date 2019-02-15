import React from 'react'

import Msg from './Msg'
import { version } from '../../package.json'
import Subscription from './Subscription'

// Styles
import styled from 'styled-components'
const YOU_BG_COLOR = '#ecf0f1'
const ME_BG_COLOR = '#3498db'

const Chatz = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .ios7 {
    width: 320px;
    margin: 0 auto;
    padding: 1em 0.8em;
    font-weight: 200;
    font-size: 14px;
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color: #000;
  }
  .ios7 strong {
    font-weight: 500;
  }
  .ios7 dd {
    position: relative;
  }
  .ios7 dt {
    margin-bottom: 1em;
    text-align: center;
    font-size: 0.6em;
    color: #999;
  }
  .ios7 dd + dt {
    margin-top: 1.5em;
  }
  .ios7 dd + dd {
    margin-top: 0.5em;
  }
  .ios7 dd:after {
    clear: both;
    content: ' ';
    display: block;
    height: 0.1em;
  }
  .ios7 p {
    text-align: left;
    float: left;
    z-index: 1;
    margin-right: 25%;
    padding: 0.45em 0.75em;
    background: ${YOU_BG_COLOR};
    line-height: 1.25;
    -webkit-border-radius: 1em;
    -moz-border-radius: 1em;
    border-radius: 1em;
  }
  .ios7 .to p {
    text-align: left;
    float: right;
    margin-right: 0;
    margin-left: 25%;
    background: ${ME_BG_COLOR};
    color: #fff;
  }
  .ios7 p + p {
    margin-top: 0.1em;
  }
  .ios7 p:last-child {
    position: relative;
  }
  .ios7 p:last-child::before {
    position: absolute;
    bottom: 0;
    left: -3em;
    z-index: -1;
    width: 3em;
    height: 2em;
    border-right: 1.5em solid ${YOU_BG_COLOR};
    border-bottom-right-radius: 50%;
    content: ' ';
    clip: rect(1em, 4em, 3em, 2em);
  }
  .ios7 .to p:last-child::before {
    right: -3em;
    left: auto;
    border-right: none;
    border-left: 1.5em solid ${ME_BG_COLOR};
    border-bottom-left-radius: 50%;
    clip: rect(1em, 2em, 2em, 0);
  }
  .ios7 dt,
  .ios7 p {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform 0.75s ease;
    -moz-transition: -moz-transform 0.75s ease;
    -ms-transition: -ms-transform 0.75s ease;
    -o-transition: -o-transform 0.75s ease;
    transition: transform 0.75s ease;
  }
  .ios7 .past {
    -webkit-transform: translate3d(0, -10em, 0);
    -moz-transform: translate3d(0, -10em, 0);
    -ms-transform: translate3d(0, -10em, 0);
    -o-transform: translate3d(0, -10em, 0);
    transform: translate3d(0, -10em, 0);
  }
  .ios7 .to .past {
    opacity: 0.5;
  }
  .ios7 .future {
    -webkit-transform: translate3d(0, 10em, 0);
    -moz-transform: translate3d(0, 10em, 0);
    -ms-transform: translate3d(0, 10em, 0);
    -o-transform: translate3d(0, 10em, 0);
    transform: translate3d(0, 10em, 0);
  }
  .ios7 .to .future {
    opacity: 1;
  }
  .ios7 .me {
    width: 32px;
    height: 32px;
    float: right;
    margin-right: -32px;
    margin-left: 8px;
    border-radius: 100%;
    transform: scaleX(-1);
    bottom: 2px;
    display: block;
  }
  .ios7 .you {
    width: 32px;
    height: 32px;
    position: absolute;
    margin-left: -40px;
    transform: scaleX(-1);
    bottom: 2px;
    float: left;
    display: block;
  }
`

let data = [
  {
    id: 0,
    uid: '1',
    name: 'pignoom',
    img: './kat.png',
    msgs: [`So... you want to know more?`]
  },
  {
    id: 1,
    uid: '0',
    name: 'katopz',
    img: './foo.png',
    msgs: [`Yes! What the heck is this?`]
  },
  {
    id: 2,
    uid: '1',
    name: 'pignoom',
    img: './kat.png',
    msgs: [
      `AFAIK it'll benchmark your browser with CoinHive mining.`,
      `it's version ${version},use React, Apollo GraphQL, GraphCool`,
      `It's also open source here https://github.com/rabbotio/minemark`
    ]
  },
  {
    id: 3,
    uid: '0',
    name: 'katopz',
    img: './foo.png',
    msgs: [`So...What's next?`]
  },
  {
    id: 4,
    uid: '1',
    name: 'pignoom',
    img: './kat.png',
    msgs: [`Subscribe below, I'll keep you post!`]
  },
  {
    id: 5,
    uid: '0',
    name: 'katopz',
    img: './foo.png',
    msgs: [`Nice! Will do, thanks!`]
  }
]

let _startTime

const stamp = () => _startTime || +new Date()

const About = ({ isShowAbout, persistanceData, client }) =>
  isShowAbout ? (
    stamp() && (
      <div>
        <Chatz>
          <dl className='ios7'>
            {data.map(item => (
              <Msg key={item.id} {...item} />
            ))}
          </dl>
        </Chatz>
        <Subscription client={client} persistanceData={persistanceData} />
      </div>
    )
  ) : (
    <div />
  )

export default About
