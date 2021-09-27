from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Review, Sauce

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# route to get all the reviews for a user
@user_routes.route('/<int:user_id>/reviews')
# @login_required
def get_user_reviews(user_id):
    reviews = Review.query.filter(Review.user_id == user_id)
    if reviews:
        return {review.id: review.to_dict() for review in reviews}
    return "No Comments"


# route to get all the sauces for a user
@user_routes.route('/<int:user_id>/sauces')
# @login_required
def get_user_sauces(user_id):
    sauces = Sauce.query.filter(Review.user_id == user_id)
    if sauces:
        return {review.id: review.to_dict() for review in sauces}
    return "No Comments"
