import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

const pubnub = new PubNub(pubnubConfig);

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubnubConfig);

    pubnub.subscribe({channels: [MESSAGE_CHANNEL] });
  }

  addListener = ListenerConfig => {
    this.pubnub.addListener(ListenerConfig);
  }

  publish = message => {
    console.log('publish message', message);
    this.pubnub.publish({ message, channel: MESSAGE_CHANNEL});
  }
}

export default PubSub;

// pubnub.addListener({
//   message: messageObject => {
//     console.log('messageObject', messageObject);
//   }
// });

// setTimeout(() => {
//   pubnub.publish({ 
//     message: 'foo',
//     channel: MESSAGE_CHANNEL
//   });
// }, 1000);
