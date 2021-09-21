from flask.cli import AppGroup
from .users import seed_users, undo_users
from .sauces import seed_sauces, undo_sauces
from .reviews import seed_reviews, undo_reviews
from .collections import seed_collections, undo_collections


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_sauces()
    seed_reviews()
    seed_collections()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_sauces()
    undo_reviews()
    undo_collections()
    # Add other undo functions here
