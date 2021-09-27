from .db import db
from datetime import date


class Sauce(db.Model):
    __tablename__ = 'sauces'

    # columns
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.Text)
    image_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    user = db.relationship('User', back_populates='sauces')
    collections = db.relationship(
        'Collection', secondary='collections_sauces', back_populates='sauces')
    reviews = db.relationship('Review', back_populates="sauce")

    # methods

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "user_id": self.user_id,
            "image_url": self.image_url,
            "created_at": f'{self.created_at.date()}',
            "updated_at": self.updated_at,
            "reviews": [review.to_dict() for review in self.reviews],
            "username":  self.user.username

        }
