import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'notification-api',
    brokers: ['localhost:9092'],
})

const sendMessage = async (sender: string, message: string) => {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: sender + ': ' + message },
        ],
    })

    await producer.disconnect()
}

const consumeLog = async () => {
    const consumer = kafka.consumer({ groupId: 'test-group' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const msg = message.value || '';
            console.log({
                topic: topic,
                partition: partition,
                value: msg.toString(),
            })
        },
    })

}
const delegate = {
    sendMessage,
    consumeLog,
};
export default delegate;