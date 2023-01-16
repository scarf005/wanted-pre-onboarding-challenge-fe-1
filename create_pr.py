import re
import sys
from subprocess import run
from typing import Final

commit_regex = re.compile(r"(?P<type>.+): (?P<subject>.*)")


def is_conventional_title(title: str) -> bool:
    return bool(commit_regex.match(title))


if len(sys.argv) < 2:
    print("No argument supplied")
    sys.exit(1)

title: Final = sys.argv[1]
if not is_conventional_title(title):
    print("Invalid commit title")
    sys.exit(1)

commits: Final = run(
    [
        "git",
        "log",
        "--reverse",
        "--pretty=format:#### %s (%h)%n%b",
        "main..HEAD",
    ],
    capture_output=True,
    check=True,
).stdout.decode("utf-8")
HEADER = "개요"
BODY = f"""\
## {HEADER}

{commits}"""

print("will create PR with following body:\n", BODY)
try:
    input("Press any key to continue...")
except KeyboardInterrupt:
    print("Aborted")
    sys.exit(0)

run(["git", "push"], check=True)
run(
    ["gh", "pr", "create", "--title", title, "--body", BODY],
    check=True,
)
