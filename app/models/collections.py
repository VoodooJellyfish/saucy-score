from .db import db
from datetime import date


class Collection(db.Model):
    __tablename__ = 'collections'

    # columns
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    user = db.relationship('User', back_populates='collections')
    sauces = db.relationship(
        'Sauce', secondary='collections_sauces', back_populates='collections')

    collections_sauces = db.Table(
        "collections_sauces",
        db.Column('id', db.Integer, primary_key=True),
        db.Column(
            'sauce_id', db.Integer, db.ForeignKey("sauces.id")
        ),
        db.Column(
            'collection_id', db.Integer, db.ForeignKey('collections.id')
        )
    )

    # methods

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "created_at": f'{self.created_at.date()}',
            "updated_at": self.updated_at
        }
