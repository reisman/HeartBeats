const kafka = require('kafka-node');

const client = new kafka.KafkaClient({
    kafkaHost: '127.0.0.1:9092',
});

const producer = new kafka.Producer(client);

const handleHeartBeatData = message => {
    const json = JSON.stringify(message);
    const kafkaMessage = {
        topic: 'heartbeatinflow',
        messages: json,
    };

    producer.send([kafkaMessage], (error, data) => {
        if (error) {
            console.log(error);
        }
    });
};

module.exports = {
    handleHeartBeatData,
};