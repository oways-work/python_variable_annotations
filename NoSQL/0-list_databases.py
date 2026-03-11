#!/usr/bin/env python3
"""
This module provides a function to list all databases in a MongoDB server.
"""
from pymongo import MongoClient


def list_databases(mongo_client: MongoClient) -> None:
    """
    Lists all databases available in the MongoDB instance.
    """
    for db in mongo_client.list_database_names():
        print(db)


if __name__ == "__main__":
    # Notice we use 'db' as the hostname because of the --link flag
    client = MongoClient('mongodb://db:27017')
    list_databases(client)
