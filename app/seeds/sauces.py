from app.models import db, Sauce
import datetime

# Adds a demo user, you can add other users here if you want


def seed_sauces():

    sauces = [
        {
            "name": "Tapatio",
            "description": "Tapatío is a hot sauce, produced in Vernon, California",
            "image_url": "https://i.imgur.com/9S9ynr0.png",
            "user_id": 1
        },
        {
            "name": "Tabasco",
            "description": "Tabasco sauce is made exclusively from tabasco peppers.",
            "image_url": "https://i.imgur.com/ZUcfwsZ.png",
            "user_id": 2
        },
        {
            "name": "El Yucateco",
            "description":
            "El Yucateco vision is making the #1 Habanero sauce in the world.",
                "image_url": "https://i.imgur.com/ZfwbPsm.png",
            "user_id": 3
        },
        {
            "name": "Texas Pete",
            "description": "A Louisiana-style hot sauce.",
            "image_url": "https://i.imgur.com/v4l9GBL.png",
            "user_id": 1
        },
        {
            "name": "Cholula",
            "description": "A brand of chili-based hot sauce.",
            "image_url": "https://i.imgur.com/FKO0q4y.png",
            "user_id": 2
        },
        {
            "name": "Sriracha",
            "description":
            "A type of hot sauce or chili sauce named after city of Si Racha.",
                "image_url": "https://i.imgur.com/qLAp0IY.png",
            "user_id": 3
        },
        {
            "name": "Louisiana",
            "description":
            "Louisiana Hot Sauce is a brand of hot sauce manufactured in New Iberia, Louisiana.",
                "image_url": "https://i.imgur.com/FtIXLKw.png",
            "user_id": 1
        },
        {
            "name": "Frank's RedHot",
            "description": "A hot sauce made from a variety of cayenne peppers.",
            "image_url": "https://i.imgur.com/Q5eT5Hk.png",
            "user_id": 1
        }
    ]

    for sauce in sauces:
        new_sauce = Sauce(
            name=sauce['name'], user_id=sauce['user_id'], description=sauce['description'], image_url=sauce["image_url"], created_at=datetime.datetime.now(), updated_at=datetime.datetime.now())
        db.session.add(new_sauce)

    db.session.commit()


def undo_sauces():
    db.session.execute('TRUNCATE sauces RESTART IDENTITY CASCADE;')
    db.session.commit()
