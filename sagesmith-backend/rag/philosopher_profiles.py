import json
from pathlib import Path

def load_profiles():
    file_path = Path(__file__).parent.parent / "data" / "philosophers.json"
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

_profiles = load_profiles()

def get_profile(pid: str):
    return _profiles.get(pid)
