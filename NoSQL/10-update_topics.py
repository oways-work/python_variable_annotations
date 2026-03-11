#!/usr/bin/env python3
"""
Module to update topics
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes topics of a school document based on name
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
