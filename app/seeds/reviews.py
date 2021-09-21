from app.models import db, Review
import datetime


def seed_reviews():

    reviews = [
        {
            "body": "Excellent Sauce",
            "rating": 4,
            "spice_level": 6,
            "user_id": 1,
            "sauce_id": 1
        },
        {
            "body": "Pretty bland and boring to be honest",
            "rating": 2,
            "spice_level": 5,
            "user_id": 2,
            "sauce_id": 2
        },
        {
            "body": "Decent hot sauce. I like it on eggs",
            "rating": 3,
            "spice_level": 7,
            "user_id": 3,
            "sauce_id": 3
        },
        {
            "body": "Should have stayed in texas, its terrible",
            "rating": 1,
            "spice_level": 2,
            "user_id": 1,
            "sauce_id": 4
        },
        {
            "body": "I put this on everything!",
            "rating": 5,
            "spice_level": 8,
            "user_id": 2,
            "sauce_id": 5
        },
        {
            "body": "The most popular condiment in the world does not disappoint",
            "rating": 5,
            "spice_level": 5,
            "user_id": 3,
            "sauce_id": 6
        },
        {
            "body": "Pretty good, not the best, but not the worst",
            "rating": 3,
            "spice_level": 6,
            "user_id": 1,
            "sauce_id": 7
        },
        {
            "body": "The best sauce on wings!",
            "rating": 4,
            "spice_level": 2,
            "user_id": 2,
            "sauce_id": 7
        }
    ]

    for review in reviews:
        new_review = Review(
            body=review["body"], user_id=review["user_id"], rating=review["rating"], spice_level=review["spice_level"], sauce_id=review["sauce_id"], created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())
        db.session.add(new_review)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
