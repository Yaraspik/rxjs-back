import crypto from 'crypto';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

export default class MessageManager {
  static createMessagePack(count) {
    const res = [];

    for (let index = 0; index < count; index += 1) {
      const message = MessageManager.createMessage();
      res.push(message);
    }

    return res;
  }

  static createMessage() {
    return {
      id: crypto.randomUUID(),
      from: faker.internet.email(),
      subject: `Hello from ${faker.internet.userName()}!`,
      body: faker.lorem.paragraph(),
      received: new Date(),
    };
  }
}
