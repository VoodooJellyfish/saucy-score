from datetime import date
from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    # columns
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    spice_level = db.Column(db.Integer, nullable=False)
    sauce_id = db.Column(db.Integer, db.ForeignKey(
        'sauces.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    user = db.relationship('User', back_populates='reviews')
    sauce = db.relationship('Sauce', back_populates='reviews')

    # methods

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "rating": self.rating,
            "user_id": self.user_id,
            "spice_level": self.spice_level,
            "created_at": f'{self.created_at.date()}',
            "updated_at": self.updated_at,
            "sauce_id": self.sauce_id,
        }
