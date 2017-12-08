// Replication configuration for configsvr
rs.initiate({
    "_id": "contempo_config",
    "version": 1,
    "configsvr": true,
    "members": [
        {
            "_id": 0,
            "host": "localhost:27019",
            "priority": 1
        }
    ]
});