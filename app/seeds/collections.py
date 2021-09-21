from app.models import db, Collection
import datetime


def seed_collections():

    collections = [
        {
            "name": "My Top 10",
            "user_id": 1
        },
        {
            "name": "Wishlist",
            "user_id": 1
        },
        {
            "name": "Tried it",
            "user_id": 1
        }
    ]

    for collection in collections:
        new_collection = Collection(
            name=collection['name'], user_id=collection['user_id'], created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())
        db.session.add(new_collection)

    db.session.commit()


def undo_collections():
    db.session.execute('TRUNCATE collections RESTART IDENTITY CASCADE;')
    db.session.commit()
