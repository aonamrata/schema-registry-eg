from confluent_kafka.schema_registry import SchemaRegistryClient

# sr = SchemaRegistryClient({"url": 'http://localhost:8081'})
sr = SchemaRegistryClient({"url": 'https://dev-schema-registry.xxxxx.io'})

my_schema = sr.get_latest_version('event.nr.fileIngestion-value')
print('my_schema==', my_schema)
print('schema_id==', my_schema.schema_id)
print('subject==', my_schema.subject )
print('version==', my_schema.version )

### Run Local
# $ python AvroSchema.py
# my_schema== <confluent_kafka.schema_registry.schema_registry_client.RegisteredSchema object at 0x000001ED1C8F1978>
# schema_id== 1
# subject== event.nr.fileIngestion-value
# version== 1
# (env)

# Run dev
# my_schema== <confluent_kafka.schema_registry.schema_registry_client.RegisteredSchema object at 0x000002AAFFDA1978>
# schema_id== 49
# subject== event.nr.fileIngestion-value
# version== 1
