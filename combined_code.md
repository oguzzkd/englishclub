# Codebase Summary

## Directory Structure

```text
.git/
├── COMMIT_EDITMSG
├── FETCH_HEAD
├── HEAD
├── MERGE_RR
├── ORIG_HEAD
├── config
├── description
├── hooks/
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   ├── sendemail-validate.sample
│   └── update.sample
├── info/
│   └── exclude
├── logs/
│   ├── HEAD
│   └── refs/
│       ├── heads/
│       │   └── main
│       └── remotes/
│           └── origin/
│               ├── HEAD
│               └── main
├── objects/
│   ├── 10/
│   ├── 16/
│   │   └── ecec6509c04ba4b54c29a0ad18a8c7268b8dad
│   ├── 18/
│   │   └── 41c8e36347c39778df49bf52f056b558df0131
│   ├── 1b/
│   ├── 1f/
│   ├── 21/
│   │   └── ab51d87f02cbd36cbf349a0324e124a1d484d4
│   ├── 23/
│   │   └── 3f506a1350103a1b7c4fe1af56fc9dffb9c2e2
│   ├── 24/
│   ├── 27/
│   │   └── 099346c54f1124acb6faa283a30da34a4f3e95
│   ├── 2a/
│   ├── 2f/
│   ├── 32/
│   │   ├── 7bb200dd3ef15eca3f3614561427c4bf0dd11a
│   │   └── 89af93331d9415c424fa0358bf24472ae2b445
│   ├── 33/
│   ├── 35/
│   │   └── 87108e798a13b6b989fad7fdf1ba73c2c03329
│   ├── 36/
│   │   └── 6a2878aa32c7c04dff1527ab6cb190456ccea6
│   ├── 38/
│   ├── 3c/
│   ├── 41/
│   ├── 43/
│   ├── 4b/
│   │   └── 1e00a26608408cf498df7060a3a241c4207e9e
│   ├── 4d/
│   ├── 4e/
│   ├── 4f/
│   │   └── 57dbd61527ab98f532d952783467b991d818c1
│   ├── 50/
│   ├── 52/
│   ├── 54/
│   ├── 57/
│   ├── 58/
│   ├── 59/
│   │   └── 6306e97e1f53b4a25ff72e5ceb7401482ab09f
│   ├── 5c/
│   ├── 5e/
│   ├── 60/
│   │   └── be79c4c43c63c2cfabf97b470eeb282bd6a21d
│   ├── 61/
│   │   ├── 373eed642359d4b86d22211cb71eba2552d1c0
│   │   └── c869036f3ac4a53eaf3d9786652bc661040c60
│   ├── 62/
│   │   └── a4693c3f87fb449174c328f415378c4c90673d
│   ├── 66/
│   ├── 67/
│   │   └── 4bf56968e9640fe0eed3d1fba02702c689a62c
│   ├── 6b/
│   ├── 6c/
│   │   └── 94d83f442edfb176b251a25df35c7a2831128e
│   ├── 6e/
│   │   └── 9a6ad850a1ba81585673072c9321cadef8a9c0
│   ├── 6f/
│   │   └── 64e116da6f576730767cadad019f3f0c526d15
│   ├── 70/
│   │   └── 12d96898303f1cda0ed6cdf8c1aa4e50c95016
│   ├── 75/
│   ├── 79/
│   ├── 7b/
│   ├── 7e/
│   ├── 7f/
│   │   └── 332c128c47304991e953ae95c536d7562398a1
│   ├── 82/
│   ├── 83/
│   ├── 84/
│   │   └── ee0fbc0badd1a71176ac8847a288f65c048b33
│   ├── 8c/
│   │   └── fe9d5a97b388821567a2059cc941a96fbeedfd
│   ├── 8d/
│   ├── 8f/
│   │   └── c6c34dbaaaae76565f2198f6990150ce89301f
│   ├── 90/
│   │   └── 88775e301d6abe51c3001c34137d0a216744df
│   ├── 95/
│   ├── 9e/
│   │   └── 6bcb28ca7f205509d78a7f674597b6526e040d
│   ├── a0/
│   ├── a1/
│   ├── a3/
│   │   └── 63072b58bffa146e89c1e5abc9e73058359b66
│   ├── a5/
│   ├── a7/
│   │   └── 22739c709003c55be0ce62d1dbd1aed361b200
│   ├── a9/
│   ├── ae/
│   ├── b3/
│   ├── b6/
│   ├── b7/
│   │   └── d412d59e7bc6bf210384a406c046494484b531
│   ├── b8/
│   │   └── 1275bd706e85c0b2666fd3369e969ab2ca31fd
│   ├── b9/
│   ├── c2/
│   ├── c4/
│   │   └── a235cc6d0b04d42f426ab53ab44b088f7f0713
│   ├── c9/
│   ├── cc/
│   │   └── 745a32d672ade05dbe435686caef93919df525
│   ├── d4/
│   │   └── 8ea93caef0b83054ea4ac6b16d425cd193ce19
│   ├── d6/
│   ├── d7/
│   ├── d9/
│   ├── db/
│   ├── e1/
│   ├── e2/
│   │   └── 7a5594f4826a0917ab892c0265e12b49480184
│   ├── e3/
│   ├── e6/
│   │   └── 79022384f02b3f211716fe34952b1f80935995
│   ├── e7/
│   ├── f1/
│   │   └── 2239acce86942fb538fe80b9b09da8c658e0a4
│   ├── f3/
│   ├── f4/
│   │   └── e76bc86097c89b49594c6b1578c7a73528510a
│   ├── f5/
│   │   └── c2e463fb9a5558b28982bb88774b7235974b80
│   ├── f6/
│   ├── f7/
│   │   └── d66a20b53670c9ca1ed7220994e73a4ed0cc52
│   ├── f8/
│   ├── f9/
│   ├── fa/
│   ├── fc/
│   ├── fd/
│   │   └── b6019e735662134a7f16a2fc279c910362ff21
│   ├── info/
│   └── pack/
├── packed-refs
├── refs/
│   ├── heads/
│   │   └── main
│   ├── remotes/
│   │   └── origin/
│   │       ├── HEAD
│   │       └── main
│   └── tags/
└── rr-cache/
```

## Files

### `COMMIT_EDITMSG`

```
updated event info
```

---

### `FETCH_HEAD`

```
f326469baf601c094b014d763651660de1bd8db5		branch 'main' of https://github.com/oguzzkd/englishclub
```

---

### `HEAD`

```
ref: refs/heads/main
```

---

### `MERGE_RR`

```

```

---

### `ORIG_HEAD`

```
f326469baf601c094b014d763651660de1bd8db5
```

---

### `config`

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = https://github.com/oguzzkd/englishclub.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
	vscode-merge-base = origin/main
```

---

### `description`

```
Unnamed repository; edit this file 'description' to name the repository.
```

---

### `packed-refs`

```
# pack-refs with: peeled fully-peeled sorted 
9391d7d4121cf149410bb194b80267c2a35ec984 refs/remotes/origin/main
```

---

### `hooks/applypatch-msg.sample`

```
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:
```

---

### `hooks/commit-msg.sample`

```
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines and messages that
# would confuse 'git am'.

ret=0

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	ret=1
}

comment_re="$(
	{
		git config --get-regexp "^core\.comment(char|string)\$" ||
			echo '#'
	} | sed -n -e '
		${
			s/^[^ ]* //
			s|[][*./\]|\\&|g
			s/^auto$/[#;@!$%^&|:]/
			p
		}'
)"
scissors_line="^${comment_re} -\{8,\} >8 -\{8,\}\$"
comment_line="^${comment_re}.*"
blank_line='^[ 	]*$'
# Disallow lines starting with "diff -" or "Index: " in the body of the
# message. Stop looking if we see a scissors line.
line="$(sed -n -e "
	# Skip comments and blank lines at the start of the file.
	/${scissors_line}/q
	/${comment_line}/d
	/${blank_line}/d
	# The first paragraph will become the subject header so
	# does not need to be checked.
	: subject
	n
	/${scissors_line}/q
	/${blank_line}/!b subject
	# Check the body of the message for problematic
	# prefixes.
	: body
	n
	/${scissors_line}/q
	/${comment_line}/b body
	/^diff -/{p;q;}
	/^Index: /{p;q;}
	b body
	" "$1")"
if test -n "$line"
then
	echo >&2 "Message contains a diff that will confuse 'git am'."
	echo >&2 "To fix this indent the diff."
	ret=1
fi

exit $ret
```

---

### `hooks/fsmonitor-watchman.sample`

```
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $o->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}
```

---

### `hooks/post-update.sample`

```
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info
```

---

### `hooks/pre-applypatch.sample`

```
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:
```

---

### `hooks/pre-commit.sample`

```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff-index --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
```

---

### `hooks/pre-merge-commit.sample`

```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:
```

---

### `hooks/pre-push.sample`

```
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0
```

---

### `hooks/pre-rebase.sample`

```
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END
```

---

### `hooks/pre-receive.sample`

```
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi
```

---

### `hooks/prepare-commit-msg.sample`

```
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi
```

---

### `hooks/push-to-checkout.sample`

```
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi
```

---

### `hooks/sendemail-validate.sample`

```
#!/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}

unset GIT_DIR GIT_WORK_TREE
cd "$worktree" &&

if grep -q "^diff --git " "$1"
then
	validate_patch "$1"
else
	validate_cover_letter "$1"
fi &&

if test "$GIT_SENDEMAIL_FILE_COUNTER" = "$GIT_SENDEMAIL_FILE_TOTAL"
then
	git config --unset-all sendemail.validateWorktree &&
	trap 'git worktree remove -ff "$worktree"' EXIT &&
	validate_series
fi
```

---

### `hooks/update.sample`

```
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0
```

---

### `info/exclude`

```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

---

### `objects/18/41c8e36347c39778df49bf52f056b558df0131`

```
xK��OR0366c�����`��/vca���+ƪy툣`��C�1�O��	�a|X�k| �E��F��j>�22�p(84DZ�-(���^�6�u����#�J.����-�%s������i�7���''\�%9l���Z+
�	�mʼ{���$��ݻ���+��}����=��I0d���������|����X
��Ly���5��l�����_D}�#�HƵ����7��x��+����F�B>Y�<�I]�5'�6w�.�(��P��<oJt��ۿ~_������e���,��5���~��:���M����\���ޏU�{nWݸo�����z󳥟T���=���J����ߚ�}����jѹ�����Yt�5���_
�M,�����W
�]�e5efd��x'�;��w�]��>�ܯ��b��8;���`��c���� ��wo��L�3,�xF����k6����z�F��ቬ�o�fܧ�'�ٳoGo޶��H��gJ���9{��~��^������}տ��Z��#���s���~��1�������ͣ�
��jG�p���O�콺��'�n~��n�Kۊ#2�5�V�mWHX�~�+���d��~	����01�ܯk���8{Â-
ƹ�z�:p������)�N�Љ�}<aK�ύwn\xvx�2c�g<fI�����~����+���ʒ�PM/]{���� s�o͔�)Ao3�\���Kͧ������_�����_W��]���8s{PՔ��YYK�������WA�w>.	���t�)�vL�r����։�+��eu`��_No���;[u��k/���e�&��9�G������@�i�:6��E����]������g�Pa�HL��+������I��}�R��~i�\2�n�V��n����t�u]��֕�`R�ag�_��������N����r�St�������Uwc�^��Y���j�Z�����2�%~1��<���2W�~1]�k-���N�a�Pei���IW|�n�}ϪCI������sK��c������mE�
<:����9+�^/�4��ʟ�ii��3���o�������������_?ي_\�?D�!�D'�\U/�V�-��\�}�`O|���+���U�ƾ�2�)6�ܦU�eN�]�}|ο����>�qʋ�P,�`�����@��4njaxֵ砣E���D!�c�7Z�f&��4�q���>��EF�6�V��`������L�AM��Y����I�]٣T6W͜v���ֺ�O����������j�n1�s���G�w��^����O�
�4Y��ܹr�[�3�yf_���6�⭙~�
.F�;N���_ر��ϊ�Y)�y6s�K�ȹ���H�:��R��$�r��^�
�g���y�$@E���H�+��J��n]X�s�*��MfFV��G��n��~��������7��ƿVN����ϫ{�m]y������e˿�����������'}<x F��`����e
?�Dڎ��=�W$����7�i|:�v�ɒx�w�}�<&5�c
�l�i\)�־6��ªN�$qI�I1�{X���D|Z�b�
���Իw50<廣Q����q�F��A�f�z2��^�RNC��C/%�)�Rs^1�	��ޮ�!�sa�ٓ��ԝ�>K-�О�vKs��W�����R��q��d�n&�Rw�/���R��6�����z������s���V�pyʡ��-|\|`˪�Ӗh�9�&,�p���w޲fm��1s3��]���EBR�ƿ#���~=�� �s�e��3�3l��P�2<4������/��Mev�p;|��G�c=���φ잭]n�+����_���\Nyn�u|Ŏ�~\��;�ߋ7g����Ͻ��_���R1#�e'�͜�.��8S�&��X�����ؗ'D_�>Y��3r�܋
��R�N���Ы����
�`�Of)}�R�k��eZ r������g^{�ݶ�F�
�Rj�(�$�����Ikt"����{O��O ������h�A�8[�Zxa�a���ł�A����j}{nyU�׽O�6%��,RQⒹz�y�aVM��[�2p����(��%��,�śM�=+�ܗ�8.]�Ib���Fޙ!Z1�,\:�;�F,nP�l��9�i��6�6
��۽$o����>}���*��u0���{����l����^$�THLtv�\�;����/�^����}�}�y~y���o�n0��9��K*���w����>0r�6�{�Pu�-��om��S<Әչ�46/������x�W�6Cf)��J�K�(��H��bcpP�p�y:�=�Kw����D^�����_=s�kO�{	��*�ٻZ��mgUL�8���_��٬yB��2.���ʋ��f�;*s��L�>?�`_����=s�V��Ժ�ȹ?5bkr<�tf�RUN!�-,N�����q�K!e����-
<X.4]t����t�M��uJ�z�Ɲ�>]��-������.la�_�
6��O�qڵ����o�[���49��'�?^����ȝ�|-��6c���U���q8�6A�����jAD�K��q�&/����}��EOz�\
���^�>���W��V-�L< �ͼ�Cf����D����<A{vj�8(w�醿�������������o��ݴ��{�%ā_��S��3+���iG�.)��266G",_������h��;8,�����{~{�R����^��9���{F��y
N��.��2.��ϝ�/Ŧ�2A��aB0�S��J�~�n�\���F^`[�<c2�iQA.��5T=�^������k3�_<��kZy?�YwGo$ĭ�W��l27�M[�(�	�F��ྚ���>�<��,�גe�a7��1�派=oW��
��Q5Eb���~楞�*�ܿC�����N���=�L�k���n�{Yǫ�5��T_��������09��n�j���8�i?u���|G_�,��������_�������	7��G�J�w����SU���{o�ϔNל��ar�
�Tf�n�_�
b,�3g�0��b��`xo�*����+5�U����WxDsׁ&�)M'�D4�2N`tiܼ�BF��G&\�ǊI[��N�qR�=�=.�������폊٩e	"o�����Bh�Z����2�z��̽Q�����i�^pԵ�;�/�1T�&�u�S6��j��e[ﲅ$�����F�\5y�����'VMTڼ]�_��A�sW<�
ڈ
��8�N�i1�4��b9[΍s�[6'��&lx!)Z�#t��_�5\_�����We�W����ugE0<��s�իМPn�΃��|ii����L��b�w��w����KSn�V�)���Dq���?O���$����x�#Sg��F�a�=���}r���'���L[��t��68�WzT�/��3���ŝ_��ZvD��zI̉��`�	�o?�t��e�����{O��ɂ#��-�1u�5�g��ɶ+7O�tV�nU+X�Ѳ��'�W0ܾ1�-�ЕX� �=�p{�t	��aM���D?ERѩ��c�f�
#g��Ɂ�>��p��Z�v�%Q��Ċ�?�2��1�"qȃ�u�t�'�-LU��x�������<�i�����
�3��/d��Lr:���I���b"$��̟�ozs��|'I�=A�	}
�m0ȍ��}#��a�&�Z��m����ܗu���+�grw\�v�{p�L��\Tq��y��u������
���+���?�H�m�om7V������Q���Ͳ�m�궹w}\�p�ʱ��"y���*
i�d�:��#��jӓ�
��>t�֝:�뒏����s���{�%�S�!Q����ljg5<��[S�<�u���Y:�{k\����4���>���e�G����
�<���t� �{bwS�׸�YY�|�����G��+M6y}�����s��ϖNM��E���xCٮx�zKY<Z����Je�nǴ\�5�����k��_]���}�,t�������o6��ī�����;�ڋ�n>�����G�$~��z���řKMf�aZ=Us�{�V�N��y˕�+�gM�k~�/�UdNO�r��˗M����ہ�oi�F,���;��4>m=�.?"�b��)��	O|.��V�d�����/d����������F�?E��E�ߜ`���-���r-�Yz���؆��<�D��}7��ϟ�S�_Ҝ@�3O�=7�Z����
���|��}�WiIؿ����YX}�nW�5��O��w�m�z���!�]���B�YL����z3.�+���H�q��v��9 �˨	iE0Tߘ�}�~��ym�y����Lyb�mӔzw�W��6��5�n���I[nV�v��>��ݱ-�4�-.���P@K﬒��[���������۱���D����]z|hYϔ���L�u������'ϟ�c˲�6��~����U�~^!�_x�ŹeJ��N��d?
0����������߽����*9?�>��3����f��L�6���k;>��H˞u�Ю�1�y�����}#k����KB����Z2�I�UT�l�-*5�4�cM�g]�yu�xֹ}j������Z?c�v��W?�xgvEg�:3D?��"�iLd������˗�j��:wY({]ӻ�)�Y|��Z۽��_n�׻
����^�4%�PA������7m؝�u�G���m��C�e����j�-
��;�&-➽��D�����]�|��}�oԝX���M�����
��~�t�ў��gcΉF�d����y�9W�����Ο_]����k���v��'O-(uJ:��I0Nuݱ����.���{��� q�ʙ�ݞ�ח�ݮ����Qc��ڣW�W=�,u�dզW�E��8���.���E����F�J�^�l�������@៥��K��Z`��k�)�E��ƈ���;������j/G���N���[x�00q۵�Óy�g���;�zc�GoԖ�B>b��_񩭸o���Ѥ���򷙼��t�e�f�B��b�"�Iw�w��-�<T�����M
/|e�,�i��4�0���,kф@�	Oۺ�L�m�^��F�����,'^
�j)��֖���Þݨ ��Wu�?��mw��ʳ�|�&?c��P����o��IF�?�}�|��.oJ֬5����mk�~�����7����f�Y�K�0����3����?y�"r����կ��L]�wŒwja_���߹b���ۮ�ϙ�{ky�~�y�����.�8s���w��}���v�k�-+��Ys�]-��nC���V�3_
�	�:�efhm��Yt.�g�̫����m ��T����p�箱�V��˳�LX�֭�k�U�å�����;\�9��;��KaUb�i��f˲��'ΑSە(����r���z;O���蜣ٝ�)C�MY=4K"�;Y���ǖ��y��y|c�f�������u�J���[�~z�@�#f���L�,L-��o�4����Κ����.?{!Yi��9e�ʡ*'�}�VK��@�D��)��sۤf�4��:{.���S ��٭�gއwp*1�Ͱ�.��P�Os���W*�c��������N�ۧ��?�>⚿�����F��<�����mw����S}�mگ/??g=
9��sS,�ʛg����5м���0�[儩��Z=���b�%&��#[~�����xL��1+�E�gҦ���*��Z�2�T�&�Xv���j�g�a8�wBW��-)�+�&lȘ�T�jʺ���z��hY�*�ǥ������N�S�ZWR�w���'�B�w��3
�k��#2�ኍ'�?w<Z��G���#��}���QȳŶ+�M�����^�Y�ި�.���Y鲭n�U�!�+�\
<�|?��P�D0˵Zy��051�	n�q��R�nG��JFy^��173��r�[�;�O�|�ziri�?�R�][&�����^�5��U0Sr�F�&�C�.EF�Zml\�݋�R�y�x�fS�����ŋ/%�N3�����L�H�������"�_M��PHx:U���Φ�b���MMl>����z��� ����c��P�v�|cL' .��
```

---

### `objects/f4/e76bc86097c89b49594c6b1578c7a73528510a`

```
xK��OR055�`�����`��g�`�l�+�u�1�d_<��i�a.��j�1G�I(�sذ[��A��i��ړ�S.w)�`�V������ϼ�F%��9%^����O���=�AUL�=�Q������t�\jg�wh`�b�h���./``d``�{��V&�G
��MK�שO-^���Y��kT�_0P*d��O�蜝����:�G�e����\�/R�s�~Q�՛4�
�.�q�PH"��3`FEe��[JEf^1����|�sBw�@Vʯ�Y���hNH�xfƶ�ޕ�8��p�M�����]S+w�|+�w�=I{^�~�x��=��k�>Ya����u�U����U�|�ަ�2;�K>��>�Rˍ��N����kt>�N
����n��RW`�W�S%ldi�>����?'���Vl�v�����;6+��u�Z�b�,`HbH9�]t�
��
LM�3�8�o�i秔�<��[�E��:�4c����F�������=���x�`�e�]���=�������Yҏv�p+�������ْ��O.���ުy���/�-�\U�и7��芕ZlG�{�����ͬ	�,<�jݾ�j��2�'�4�7�K���*e^�a�����L���1�J�I7@�Ӿ-��xk�����wU]jP�}����un��*�$q0K$�0hXl�\��ِ���!h���ƛ�qZ�O�3s�O�t�80�>:����S:
ܺ>4�����g|�t����u�����8�1�s���4���iw�;�s�\���Zm�����A��eOe7�����/������{�CK��~%���$�{�ZFeG@��	N�a�wnϼ�]�%�O��kx2xQ�[��.��J�E��-�"��/�Te�ע�Ŏϒx��y����w���w��>|YW������s.j����_����ʍ���e��5����YlVp1�/v԰q�q3dï��}����25=�����������8�����Iv�*��mW�����C��Dh��X�M��еUj��kA. �K�1��0\;��1�A��\�c�a�����/���<ڕ�.��K� i޾;NMi	.2
�N�hL�j����X�}*_��A6�
/���
�bP���!d�����:A��͊��\vF�bEc;?w��9�{�m��9c��U�ձI�����9���A������s�V�+T��:��}���؀���nϨ #��G#ߪE�8kz���A���l�r���¿�L'1��n�=u�ˌY;����,�K^$�jU0��o�D�����L����K\�x�1m����f�_2�*s��(�9+5*@����K���������'��g_cK��k�O9�~$���㳊�<5��7�?��p�/_�4U������Q>;���T�8���U�9v˨�%�4ھ���b�c�"i�������gQ0o���,����m�(#�9�K�38��y��	-��=^��� X�Y%Sv� {h˜
�z�,��mgi�)�����9ܼ�����{��MLuO�I�*�uӡ�j�31c���@�7�w��2�_]����?��<~|��UY��������.�$X�x�у�T���H[<UXU���Ua�M(?[	r���J�	��M1��5S��m��߮ov�8�#x���g:<h���Ynv�G���SB���g��v�Z�M^��GX|��|�#���3�:�K���ŅwVN<m�&�~����n���k��w/��_�!6䐲���/83�L�b����mb=䒐}�B�nɔ��sg-x���pk����L�����Yܖ`�&��%��)�r����	�f�Ht�9�阒o�xę�#a��e��
E�c�o>�߾��C�������[�Ֆ>J�`jk!t�������띫�<K;��w+��o뿷{�:\�����Ϲ�^0�b˝z�M�߉�3�-p;�h�oe�f�r�Eϼ=z��U��j�?�`�B���˾�;���x\�������Ѵ�e��F���vV'��=U3�M`87Ee]��c�w��Ͼs����7�R�9����|��E_B�͝5q��+�������[�:i�*EV�n�M���������&67�ڽw�9��A����Q���<k����l6L�
��o��[b�%+pX�M��B���\F�B%2ŮW]�V�����A���lʴ���G���oXצ���>�4������.�z�
��i�j�\�,�h��:�w�D��K�t�,ɜW�|L2��Z+����9�8�����D_�����
����1w']��i�#�	U)/�u�[���L��X�z{m!�	
[^Ɗj��Zd��w���h�Q���ѳ6(�^;��|��bwz����]t4kꫫw_}4�7���yb��r�E��S�ƻr�,Jx��r���W�9�=����f�g��G��9�j�͈c'�&&~�{��Թ�BS���S�x�7�KAa��m"�n	W����`y椃Ѧ犯��Z�}���Tu&+�b��Gz?,��vV{i��m���4�˧��o�/�ߥ�K����&��2A���)K��ޝz������͏����O���W�׉��A�Y���6�X�����~��SA:;����;%[�ڮ�3��de�2�G��xN�U��#�Bl�W��>�I���>K�8�㎫k%��}l4��&���u����|��tӓ�
{tf��MǞ<^�����z=�|�6Ǽ~�����/'É���r�.;����`������BԤ��;�Od�Z��w��UW���fM6h�qx�E�����Eo<�g�=
�?�TV�Ka�|iF����k�����ZN�����
;
�9�!bo"5���b�8����:ߵZ[�*��Q��ŝ�߆�R,��^s�ۙ��f�?����]Sg�8{W�ԍ�}�]ٔ�SU���̑�]�:F]W.󿓪��=�>+M{��Y��+:e�6��Ok��*R�{L�[���25�ֹ��>���j�ڿ{���K�Xv�������c�����ff�r���g����44��)[��]����yB���m�f�ֺuh2�֨�=�7b���w�^q��Y�{ͦk�z��l�7!�M��Cv�2f��ӧ`�x�~����[���O�|�X"(�}�n��F��3
,̑ݽh�k��Ri��K6���u�:���[`�6��'�z��v��L�v�:&�Ý�u�����k�~��b��<t�g]`X-���Ф{�����*�������Z�]�_s���W�|j�h���#%�2�B�.����˧_מK�̹z�Ğ�Q����eq��5��=g<0��
;�ZҦ��U�C�'�W]ͪ�)��j�j�I���}g9��T�Ʌ�n���(0<��Yt�X�O�ԭݎѓ>7�N/�rI�3�i���QfY�u���p?�&%�^
�� �9�(�0�`,֌�;u.dSB�ꓞ�j{vJV�k>ѻ�q��ӓ��w¦�	2�|I��a�6S҅3�_���%-O�]mt2�U�W����-��������
ٚ�8le�֨i��l/�np�]�f����~W���7W8�=%\�u����g\W�^:�qz��؈����6-�=�Wo���M	�tRX��:�}�Qtĵ=p���ׂ�A��-v
a�Q� ���謳�fk7����*<�|cK���	!��',��޻}���]Y���l;��G����;���TGߎJJ�g����D����qnn��ȴ��T�Uk��^�[�kp�f�̲�}�{˹��7;Z�����+���q�"~~q�k����&�I�<�='���گl�Ns�Tg�/u.[{]�!��[�[ʮ�[̚B��S� �_D봐
��;e>w�N[��qF̶����Z۲_~�Z,�����S�KKt��?��U6������g%&��104�\8��6�w��$��oĚ��Ř�;l���U�!����gP��qo���������m�5��:��w��¼�W���[Wm����:��Q������J�a����Wҍ*�3cV�05���?�+V�b����zΫ���-B����J�N]93o^�ߍkS��]_?_kF߉�K�2~L+�������G�������j��U�f�_#�����W~��XtBР��פU�5����,���/��tJV��hǽ�_���o���szQ�VΝK����Ե�ޟ��I����EZOo���+n/4���I+?s���F,sl��o����j��^_K�^c��EՔgI0r۫�)���g����+]k�����)3��$���Ĺ��N:��Y�{i���8�r��w��$��<������0O�rґ�k�-.[�8ţ�%�hA�ĭ'�~A�n�3B=��N�9�`���8� �ޟM�yd��z��f��ϲoF���������n�g��t��Y�q���*YJF�!��뇊��1<:�j��lV�� �뫫p�0l�k߽�dXJ�J�T���v�߬ݖܯ騽��Ǟƈc�|6E<me*d;"��o_��e�i��]�Z[>ܱ��u�ДU�{�.;���:$E��*pd
����|�م�mΘj�[����3e��o6�,r\|���&i-;�{�UhÛLn
�W����'�l8s��k�S�CҶn��~-��gC�S��B�H��]UY�����S�,�j��:�M�̶p�叧/�*RHh��Vr�K���0яgU�n�]ʷt'�ؠ����
S�4�&.Ze2urgߔ�z� �HW5M���������~F�z}�&���<ю>���2+[��"�_},�Yq����]aYB�tor�|�t���%�+��5F�8l���ﺍ}�S�㲣��o��ۛ|1n�>��)�?�aX�s�ܼ���ծ9V��v�ϳk�e�\�950���i���˲O/���*[;���⬉75�}t����uU3��\�Tdu�{��so��O�+��V��.�N���w݊#�D�^-��Y��c�G�Z(����}6�x��{��ף/ޱӒ
��Xg��-���q��B�[��\�Z�ϵ��ؓs����oӒ��.�g��(z/���_�a8�s�ݜ����r�>�j{x��1#����?����1���ajqc�����[&?��s��r��ql�i�]R;g���)�䮱Ic������K��<\�5sI�r����~*�6�,3���j����
�l}nrR$�Z�x^���'?�9r�\��r�+�g�L��j��B_m���լ�{�?K��y�.Sf��˶���3g��u�7�=w���o������5���ӥ�Ҡc(��΢��P�*�O$>�z�"�}M�0��g6�z~����Q�����Cn/~�7f18X���g�L���5qO���8�c�e���F�6.	�����,%k���3Y;2u�i�M����l��:-Zg���Z����Eo����qHx��NS
���%4��4�����X��� ��Ԅ;9��]5�  ��g!
```

---

### `objects/62/a4693c3f87fb449174c328f415378c4c90673d`

```
xK��OR0�45b�����`��ca�l�#��y�۲ɡ�YaڑKk�"�8ּW2ܼ��o�F&��؛�Ee



<:3M���aȮ�f�T��r���2�y�6�����MT\�(��`hxt��B�Ga�EnA
��Ň84::���޿HIH��^��=�����x�������&+�v���Eq�uP�C�Ϥ�����]�Y���x
�~Q���t���N�6w�s�Z����7><�Hy��qg/���
�f4�	�\�~eÓ2����XM��\u���^Y�cyߺC��/Tw85Oi�ڣd���/�~����2����v��[��ǌ���K�5����hs�`{��r�륡�2��8lV>4��lâ�z	��f������~z&�m�S�A��b�?�z����p��E��֕^A ��Xy0Ξ�p�ϑ�Rn��jy�ԣӼ&��Z�d��Vn�&d$�T�u�3sɞ�?5��{^ܺBaք�)i'/����gtI�Tٕk�,.��j��\6.ܥol���T���]!�N��|���Д���ޠեk3w�G�]�jr�'c��e)37�Mf�)=��sd�լ����b|$8B���:�pYyvΜ�{������_L��Q���3��f�$���b-�ֆ�2'�8�O3/�+�f�R�rŃ�:���"|7~j�������S_}V����&f�L|��iB˓�}X������Ϙ��\�wZ������Ͻ���_���{���ٶl�����iw��+�X\������?fڿZ�%������>������5<ֆ�~�}�c<����(��,��c�T�� �k�O�U�xgcwZK����OVT������úB�č�~��)~��(83S��S�G�K�&=�X�X1Sw��k���Ym�:,'f�wMYh��н���GL[�i�<n��s���]|��B�ٺ>۾~��������AW��2s��K��������8����v�#b3��R
|$�"/|�fj
�� ���r��ޯGϥvDN:��P��0�&��%QP�/K#���	G*��������:1����9c㞥�F��l�O~qX6v����B�3�E�0]�cKlc�ئ���В�>{����X:��Hs�{&5�^yѸ�O��0�ᗾg{��ϖZ4��ȴ��������][:c�b�^����~Z���'k���_R���Ps�A�S�e���|���t~��`x�wW�����	
oӠ��<`:#�Ȱ�Q�t<����6=O֛d�륓�[�e���z��"���K,�?�:��d���S�?NI�jdo�I�����K&ӊ��p�U�[s�tˋW�B2����]6�(q��^�~^z�}�����o[����E�|�������]z��٤%�ɹɅ.�m�5)4��1uJ�[N��_T�����޽���=��y�4�L��sd��K>���uyp�><R��<U�鶷_�ﯓ�ԩ,qx��Y����1�����.(eA�����
զj_s�����"K�����{�]����GsC%y&��z\�l%v��e[�TD+zK��^���ˣ
��:b�H�_�:���A���k�)F��&4s���c���r��F�
��r3Rd�B
N�,��2�+-a�ǌ/�;(8-n9�2��T����/���ᚊ���[963�0$���^�V
��Y�|Ͻs�ky�>�����]��Mߪ��F���-u*y^ܑ(;����
�펏�]�~i����q�)ц��mL>�5����)��Ң�uL��l�r���r�>�S0�p��1ْ���צ�������\��X
ý[;�	��%;�?����ѽڶ���g�?�����),*��輠��|n�?g��*ٜ�6匿��o�}:>����+��j{������Ͻ���n�Ra�{�{	����މ���Ts	�Y%�X]K��_�NLqmiJ��Kmt_�ٽ ��Lҗy�q��-�\]g�:��ȡk;����o��X����d(��y�ѵ�-�A�T�ja�7e�ݿ�#k�t�n�0W�l��W(���Ĳmms&���:��<��Js{P�[KK���c��������+_��>�m��pZ���׵���r~��+�	��&��M-�N8vc�g�9|�
��nPH��(�=������⬄�(��/GU�p5f.nJ\�f�t�]NQ����^ֿ>�{�.-��dw�XS[�9��4ՙ�Z�͘����m}�V}�s�T6���g5os'��K��daШ��ߡ񺉶���-���]mʳ�����fs�]b�&\ʢ
��Ӆ��LO��?����ڢ�d��%Nm�f�p�86�t���];�j)�i�ڝΛ}��Z�nA	-��2C���;����L����D��3X�x�o?�V����˂V��{����M���M�����؝/�ݘ�le������o�z�\�����н���]m����R6��i�MZ�l�7�
L	�l!-��&B
��\�'��~d���578��ض�`LǕ骿uv��g>�sj�7�4ݢ���e����_�}Ѳ���.E��7��߫������������K�_���ً��S��ӵA����oϣ:��?MM������C2�������ʳc	[NFꂳG��~�JT{xӱ�����W�Ɔ�LJu1%O��&���p�1�B���=���d���.�%m`�,Zd�j�:sم�'p9#�Μ�ZO��X���e�o��[D���~)�7y����A�|WZj�w�b�Z��������j'�-�
9���;E�\%��F��
j��Z�y��H�����P03}©
zN�]��{�\�o�y���-Ϻ+T�r
�Z
#�ˡ����1�Q|�bp�7�'��ɢ�
:fj�3�n6V�U}{����}�ܮ�<?�=���t��geE;��&*��Υ����b�7.�%��ߔq�a��҅;~��ꐴ�����~��m�����n��2�\�:a-�r��o�n�r�q����E�P?�~w�첰�f�v_��]��b��ia��L{x�E�Z���+ޮݲ���ۙD�#�r�UM�*���z2��!���9��:������.s�"m�[�����&y�1�W.v������!�����u��rr|Y�s�Nz�ImHOaj
:+r��
��U.MQ�׽�cc`�|�g�ƒ⎹����=�yכ��!���?O���:ׯ�k|;����Ve4y}��_�n]�����]������ػ�/
��=�S���δc��e�g�(
I<UR�x��b����6|LR*�6�h����3OY=1p<;����ݛ��V���ڬ�Q��KV���D�C%m΃��uM��,=[<r���&p
y43�x%Lx87���􇓠î�ܩ�\�kw�9�����x�;ukRA����"WJ�R[�=��}�6�a�GiХ�s���Ξl�����J�+���۱U���GU{�z�����}���Ƨg�h^Q����:9��S;�o������מr[*��������������޸�[�d*�$ؘd�=ϯh��7����>�oe�͹����?��-�T�o��֝��]%n9�ly����\Έy�[��T\�X����b�Q
�3�����g�1^���y�u��6������휓_.�w��d�c�u��ݾ�:�`������O(
�ڰ0���O77E�JF=�l�<�������[�讜��a��d�i�����-���5r͌��Եy������{�%��ؤ�HM��?��|<o��s�R�~wy����6L��ғԗ�)�r�g�V��s�W��@��(��򅻆M��c�,rrVv�{��� �h��϶��<'l��xɟ�
;�N�q�l�����5�M�})K�m9�/#����ۂ�Ne������t��+J:)��絥���i�p�=�����ɟگ����|��?Vsz����.O��q�}]l��ߗk
B˻���/�%�4q�ѵv��ݼkL���N����E�/�}Py�ī�c�Ǯ5�u}Z�j���>�?�vnX�2�$ӊc�mf���w��m\�>��w�T�:��PŶ$Zgs���V�O��9��;���\ߤg��޶�:���~�޶�niմ\˗z�n�9m�&rT��;�mW7f	���[.�e�wjeu�x���"���I�k�$�[].{!Y6mm��Y�+[���;hYX r�9�[�N��x�j�T�����&nj}�r5~xݜ��9����%�Ŧ̚57����W3�N�X���ٶ�ٱ�+'����n�k}�˾];w�X휑듻�5�7�c ����eBTE�fh�%sޚ��;��UK�c�����W�I�]V0����Ũ����/����4��ѯ�)��j�rM�z�bO�u��&<(��'��>�[e��!��Oս~�0�w���פ��/�]�66f�ݹ�
'����^q��n�\Ѹ2��̟͒\��r����.�s^s��-�'��8�䮻�t��c3�)gu���o��0�hu=����O���e���������ٝ���Z/S�Q�^�³��d�K��[e\�d�ʸ��g�����Z�(L�:�#0ᐦ����:Y�L�Ң='M ������ �a���&g
��\<�\��~�� �[a鑽]�Ӳ4������tѪ��4�y�<Y�zBK�^X�����ۤ+ R���}A�Rk6V����ͮ�]�Y~�h��������aj��mN��t��h��+��/�*��W�����=�E�7�\��t��ȧk��Mza�.�i��� ��ʨ�[c�J�u�U.L̷�������n-��o�D�8�U���uڒ�����5��Y�y��-�77��������T��$�4�M�Z���{���+��MU9���k����+?7�3[�g��T�P��U?{��N��c ��:Sy�Í�׊U;j��{q��	/�\��<����447,_�䉤dwġ��=��\s���!��qD�/�;��C"��c܄�J�1&���b�6��7;r�3��?'{�kN4
�b�hq�J��ăaJR�����I�<^z�w�NI=���l���A���W���ĬdNi|�\nA�Z���E�l-_�>���)u���d6E!��3Y���Sn�z�u7|>a�T�9Wk̳;غ�B���6j��_-����}�qa�����W�z�{4T]Y�Hԥk�]��M��Ԝ��ذ�EN�����f0G��%���'�e2����z�Y������p�=Q)rќ�361\*���8!l��G}��y�3b���_����~*��~p[nX��ݲ�f�=�������v�����I����Y�}M��M7r�IM��w'3m��Su�������5#�{�C�h�֛�'M���(fzYt�ƥ�_*)�r5-��S�����ڳt�Ǭ�ަ*����1��p��ΡE=�L�V�21�~�f�*��GM�F�_��2�s;�歡9'O�x�N�t����گU��n�>s�͙���K�Z]����
�BC�M]&��|��s��s�3W�.�f�}V^\�b���N!ﴴ���gΆ�Z���8����"���\����!�;$�&O�Ű�~f�4���  `�c�
```

---

### `objects/b7/d412d59e7bc6bf210384a406c046494484b531`

```
xK��OR0366c�����`���,S`�1`dJ��l4��fiJ��oj:�lJ99Y�g�A�@G�߻w�.+84rt(8�4*//�pqqq��{��M&�Ç�����%6��A`��>�����S�Wi���a��Sʂ�ſ���u5Y�x�1�3�����XY0�L`x�4���
����n:whk��]��Q��d^�x5o�,��طu��{���c�{�e㟋U�����<w
�-��[������o߳�G?r��Ųi����]�w��y����Js�N�[�}�����kO,*�������k�_�O>�$��ߗ���J��n	y��8�t��}g��Z��:~�U���/x{�M}����˧t��/��"6��'�q՝}�,5�b��5���b��ٕ��8T<�&��zt�1L.�y�����ܖ+����f˨N�<��Do��g��%�2iV|�!��Tx��˵�{��[r19�᱔R�͝)�˶L
w���~���+���6���+���]����B���ko�_/�=k�ߙ�JV�K33�9��z{���/<_=0�<9I�@G���ɓ�@���>��x>��O��y�{۝�-������Ul
������s�˥D�ŉ��+�B�ì�:Z�<�ՠڬ�b��+^*�O_б��v���+S���ՙ�f3��M�3�p��2W{i�����|�����:�wy��=�K�K���<��w��+8���������w����/u���fU�c��EU�Q�m�-Wo�]�e� Q�Ĵ['���/�����p��]V5���W�����ܚ�'8{�O�u������;3'3zaN�T˦
*��B�׭*�����=�fh�.م�s���x*�Q�f8�"*b#˿s�2���;=D�$�v/�(���k�l�ƌ��guu�PI�s������3��܎��1������_�~��;��+Q7{�l-߄�K�=�e�w����ٛ�T~u����_X;K���^���O���o`^2��D�VƄ�u���5���6�;_�x�_:�vҎ���s�f��Z�a�h�RѴ����
y�&s��yHM;����ԧ�a��?,�4˼>L�@f^w�����ר^�u��U��O=5�}�}���%�VoK�����L`���b2b����eL�����Rs�vz�zf�Nq��Jf�ߚfs���/�������ӌ���r
	,{<u�#�涊���ֿ���)rͧ�NN��5�1,�s`Zr���]�ܖ����b�F�jny��������\��vU�cG�?�W���};����d�����J�\��2m^Sه��-��,�y����s�.���e���S]:�l���ב�����J�T>���x��pH��QW�#��3�@�R�bkax�e�\�YY��X��
0��/j뉰���y�g�F&J�?����)N���ё��7��gҿǯ\Rb�a��v���ģ`�)�ż7z��W����?e��?����l��>��_�g{E}C��7�u���s���I2:�ط���������U<\����?�����U�~8O�7[�č��E��b���&��h����yQQ��j��Z�M�3��H��?g���̟ѻ���������8��	����O�Z�S�����֔�
^.Sz+����g���[|�j���D�
���'��57���;'��`�ә��4
*�7�^�����b(oK�Y����,HSN��:����w�5�i[��W
���s'üK�O��0�x�߭jt�f��E7�2ΜZ�V�~��^-���x��]�d��󃗈T�>c������][25������������vPڕF�4���=?���cM\�<���=��Fv�tߥݵ�qY+������~=��qag�v����'28l\�(��<)6��u�_�8Rg3������`8�U��P�bI�m�f0��*��ĥ#uX�����>)�e��vqtN�?Z���{f�,Y8a� �C��Ӫ��j�9���6U�-�rV�}w{�d�������3��=\��g�������щ�J3d��&p,��d��:ֿ��}�#Gq0����O�>cɈ���upVѲ	�RN&�[?>_�l�Ѳa�����yB2!��l"��L\�Uumz��ʻ�{��Zk������2��
 �W�o+axֵ�ҙE�^�R���Q�l������6x�2k��k[�:-���f������Vřˎ�u�\���̴*�jV)ۂE94[z���`(8�B�f}МM	���
��1f��iK��hTސ���p���YjB��<׫I�-���x����5������������-;>1rB��aGŃF�`�����+����7p6��}���j�y��J�Ѣu��c3W�a^!u��Iٔ�e��'IO6�^����M$�x[F_�����7�(dy�����u�� @�+�-����I���
y[���Ŗ�g�cn���p��=��=����O���\{e�����V�{y��뒒$1�L��'������9�#�O>>?���m���A��"�
�O��
���đ�xd�'8�רY.�ax�2e�\��s&}m�wL-�G��SE��SSnnY�r�T�T�Wܩ�N\�)����1��8�'oM��7�d
���۾���͝I�,o��?����/�m�*�H����W�g��xp@�����׫-�/:�N5O��:�A7�1���"�ԍ����RV�,K|�R!�/31#A+CbAb]��$�S+�@�L�vP(�]v-H��tvkY޻S��S�����Z�Xb��)����a��n^��<V�z�fL�����.	xr�h��Z���޿��o�ה'�RL2�٫�nye{�7����S�ߍ�:������|�������p�ԯ|��'R"��������my����hn@�ۇ.����bp�6C��ՂU�_ݝ6�~��36�ΔY�D'���j�A5�����u:%��_��颤I���UysN0R7�o�[������;�����N�S�zG���Ҽi�6:���ak��&KF�Q��R��|7� r��{�.~�5�6䗲�gS-J/�|}�Vj�_���'�f��hqZ��(r���AA���
��l(͙��Z� A�ō
���9dN,}nd�����G��o�ƿJ���-���?����Ii��*QWtm����;�$��^^����Gm���zײIW6zsN^-�I��ʲ�ɚ�n/=�q���[G��lN��i?�a�[��Ą�G�V{�KyE|�Sx1�~ۮ��g������Տx+t���TկN����a�o�޾����>N�pB��Ŋ�A������,2�V����<�P�!�YB
��7�2L�qe��m�����-}����d3Տ�(�kIm���iF;}&��?�y����f��R���z9�>},�s�^���̿��n~G�#�KN~-�u�]�c7!˴G��J�O�����S�����4Z*gRkʅ�+�?�*-���W?֭3���M�&+�������>gޭ������yǅv���{�J���*�y)~L���)��ʠ�[��w�x�<���5t4��\�d�fc$�ɘ��#�^�Wleʮ��C�ק�4�eq�_��s�k��:���o�5=�h5��R-���ن>J��^�{N�����?Ek˹����V�\5u���|m��2k���.�ʆz���y�6�u�ڠ)����d��\��~�g��f�~16�}Blm���%��:�����v��@�߭6���%���E��y�%jC�K�VV�Hv���}�'sPޛ.�%�,ɳ&*��w�<빻��l�K'�>�\(��E�%�fag���r��W&I.���SWyo��)W��Wn�k˹m���kD�N�wT<Xd����DH�����0a����d�C74׫r�|ο�w^�6�{�=xv&�92��휷�����{&���{_|lY�U�%����3`��`lX�V!9aR�{h��S�ƨ�U�`;����g����ZU�w�̸��h����vU������\{��g�皨��E����X�U��$��=,[�OE��w�����ݿ�^߳���#wUU�vhRc</��$����@PK�`[�8[��]�Ow�Z��̇��S�v�F�ʤ�+O9�>q�R9���k�84@��x�ʄq��m���]�Y���>��������n�?��am��Q{�BՋ���߳�.Rd���+���og5��ʰ�U��<���:t�ޏ��fi�6�T�!i����آ���J�O$���z��v��]׬�o*.�];�pU�3��e�&۾�ۧ��l깵���wv�rv}[�m��k�KW�:���F��[?����_:�&�ҭ��
7��0��`���W���S�5,/��/w�ҽ%H��p�zq����'^x-�+�>�j���V��ɇ�h��\[��&pkwخ;��˾6f���ڷzo����1��V	;ݨ����k�����_�Y�gϔ<a�!�4+�[�^f:g��ƅ�ENw�G	}לޕ�Y�f�:�Pb��Ε��f2�D�&��M:���xn3�έ��[�Ed�[z�~_ݢo>������Sj���b��&�3��O�!g��*���\<5�-h���=:�V�q�~����a�
G���Ǚ��]��a����b���󽗓ws]!끀��4�6\ԞR�y�6�Odr������h�%����(��6��"��&_������f7�?[�Z�j��+mBʬ$C*u�Ů�������13*e&�e�xr���l.��b;��Z=y����o��3k�j��<�߽%&����t��m��;vb���3?��T=��oj���l��k�,��{m�z}��$�y���9�j=\��uF�#-�����ϵ�Lq�|P(n�=;�ص�)��� ���#|_��?c��ҏ*m9Q�;��F�߻�vΜcn�>��
�1�*��	��B��R<�
r���6�j���l)I^�$�^r���?����34�p���ο6\���SsN��u��s���޵3ߍ�s$��C�����9��z����Ԩ����7��l��T�8�r�`M��؂�
Ѧ{C�6L��,Z�eդ�8���R�;1Nb���Z��K�����a�뮝΋�'�2jF�,Y��~r��Y��[^�	p8!{��`Vǒ��[B#D7���_�&�I����w�������9r��������~����塱�����?W�7��g_[z��[�����:u�AgMC�>:M���	Ta���v��i˦gBYY���N<4�byةM5�*Sf���e9�Up�e��\<�F��ڎ�9�fmC��w��1W~��aM�w�nu��{fj��P�m�w�qô��w{��R�s4-�΃�?A�E���`۝�<iYg�Pc|T����U�Tm�Q]�⠗f����M9
nM��[�~3���܂ʌ���tO�����ߖ{W��[��;�f�f�*��t���V���#�>��{S�q^���3������?�����;��xn���������s�^~}�n�����׵�#/�����rc�M=o\��e�w�*��ɢ�+E��V>S����"��*fɛW�,����eN����C�S�籤�4�h��aF���v|�*�����=�����u<�+�j�t�����~�}�̯l��x:�֕{6�
���<�wYm֊��m�65?-�	��/_&�pj�Ġ+�?�g�DK��T����ؾke�f�}���u��_���~��%��^ȴ��Vo51Yr͹`������+�,��z����=wB5����_|��Ƽ�����3ׅ�-�v>c�Xխ��%QEj��F�S��J�!fV�
[�ڮ�r��럜���ĵ��,."�@c��Mj7:\_4�dZXD�W���Zn�UM�V�m�}��|�R�e�����6V���g��3eW~�V��o����j�]�^rO˲�_��d�R��Z��"�"8�E
i���E�v���m{�<�UU�k�\���~"P�hsT+C��\�m5W�����/�֪SN������~���
_k���wbST^��O�u�<9�Q[I3�[q�Z���OE7����j�)��V�������ҷ��n村��50�����X��� �, r�g���0��K�	�	 �R�
```

---

### `objects/60/be79c4c43c63c2cfabf97b470eeb282bd6a21d`

```
xK��OR0�44b�����`��zmca�r���!��&��#��?���4L#Y��W�#�[��!��)��(s]٭W�v�������U'b�:p3��3��<2�h`-vQ>�ح� 0�����B�]��_�����ߊ
M�޽{�� (�����}aI9��v�i.�����a``<����O��3���[�"��k.�g�4G�K��kst����7�|��_V5�c��F�� ��H۾%�֥����<Xg���{7�G�����V�����O�e�n��I,N�O��{[�~ߖ�_��N�q�y�r����\�u�_���b��Gv���?�S%���Ea��W�ȯZw��;�d��ݦ�$�FK�@Υ���U��7E�������C�����A���i��Y�~���G� �[�lѪ`�`�9��z񁔢����h�w��]��J���FD�J��(y[m炙:,w��
_pW�
N~p��?������߳�'��61�I��q.TY��i�������������
a���w�/�p�<4!�s��������q��|{��[�W߯<f�4�ح���n�-�uw���V��W濹��+����ߏ�>j�������z����X�:�V0�缛~����ƽ�YU��n�e�׾����	k�kk�J�ϥ8ϛSt�SB��]^(���jY��<����
��!���������O~�>�.�\����^5A4����o�}�wY}W���~��/�+kM�g��~�����E��?���&��|��Ὃ�l��>��}���OݙU�V���S���������k����l٧��@��aQZ��}�n柜[*��m̸�����D^��+o�֕S�x,~�0#�R��2\qc�J
\�(r3�D�v~���[����t�3���{��a|���3wo�6�y����Β?�wC�ǩ[�LO����z�zy�ؽ���gWm��5�8���}}��y��N���Q�u������l4x��~��O������������_�>�YzV��� �K��(��?�|	瓜k�D:K�<�|�_-��nV������uݴp]�Wi�R�5ŕ·�V�V*ux�zxҝ�z��k�
�W_��>�h������k�>{�XT���M�ﮐ,b/�������s���;[�Z�Fs�٥�������������6ޯ�^lve��]a��G+O��7�T=�ÌK�?Ӹ=tU�8�ٟ�oW������_���+�~I��_+�oܕ���2�I������]��=��]�noٗ�L�yN���~?;2i�����k�RB�Y�m�ڟ]�6y6Ok������ԫ���\�r�A�U�^E����>s���Qo��K���Y��ڎ��ܐK_��v�՛<a��ʾ��:��]ͷ�O�O��Z���M/۾�}�������f|򛇩���m˖12,k��jr���#�	����9�g��]���L��η��z��wm���)Q�1G�-=���@Kӄ=Fg�Un}�R���6!�=/C���>��E}ͪ��~�?
��6�=�;��Z3���i�ٖg�W3̍�1o믣����'��~dil[K�����XT/m\����>�K,"S��Fi畾�־ck���1KϮ���.N�v�UpnxUr�-��%u��:�E��r�f�����ۙ��??�W���7������R�fº#��J�ȗ�⧢�'{Կx}gm��lIў$��rj��
e�����ຌ��)dэKF�A��;#�
]��75]/u��IfC��W�m���-(+*Ӿ����/2��^,뚒'���S\LN�8�f㚚��w�.��p	4,ع���D���\�"�����_J���gr3&L	ۼ��e�����W�m��OM�����*�W��x�<�ɌX���ŕI��0�(&�hñ�Wk���I\9������nn�Y������[G��E��^}���9���\x0�k����/���M=j��_�;20�k�Z/X�y��$o�&������_��v����x��/�1�x��=Wzu�[�q�E{F���Q-Y���^���#�
��^����đ�������Ԟ/���mzѕ��r��o2�\6/�ZKǢ��S���������s���1�
��|2x+����mӬ_:�,4|���x�!3�
YW�n�H�8�T����T>���V5�͡���͚������y���B�}y�l�w�{�h3��&�u+�|o����ώ�v�G�dr[������i
õ�7$�L5��r2��A���[f�8�x_�w�/~r�����l��������׽�y=b��l�=��}LW�6�ġ�>3dg��af�xc��@V�� ��O�MO}<�oD���_�?Y�C��.\s��0���ߟu����ssy�t������A͈�y��b!YY�‗/�*��<������8��$J5�g[n�����ߠ��5��ߎ���V��v-M��숍����	I���Z�*�/��E�Bb�m?�4Q�Y���JXN,�`L�
\�?iS���綨�W�t��x�J��݁��-?Y��������L~�7���/�8�'��1�5�faܛ_Z�7#��g-����ձ]��5������o����o]��
OJf������T>�ُ_]���W3._�Q.��f�:sW?�9���&J1������
`�������>�8�Q�Ȣ�䚵ieo-���� T�jRElȊ�_�Sg�\�&[�������V�{�B殙g��n��{uv�d7J|b<��x&��!�#ѵuu����7K_S��x���O��-�j�oٹ��׋��.O8�q!7|���S�Z���&��4�6�̭or��?RS.�����P��1+��YfV�$q�R���M;ŹO�l{�t���K=�'r��)����-���t~ԯ���"�N-��	�z���_�_�=�,�i~ڧ�=�L��ޚo������rfTGױS����-�?}��Wӧϝ_fz��q�{G�*��0��o����=!����~5C.n-gӆ�)��α���`�{��`[�2���0���U{�zn��d��c����/�,����V�`��n6����
��g�K��(ū|�}�da[�KV�W���������j��6/ahm>t�C�0O���u�.�±4��Y3�.{���6�,0��o�y�yme�i�S��ݕ��fq�{t����;T���Ź�]@&�.Kq�C�����+�Y3�q\y�/T�D�s[���(���u�H0<>ug'�)m�ԞP߹[�m���W\����k{_��<Ǻ���h�s������<'��򸱡b�[�"�
�Y��Fqm
�:}������ǧ��[��X�USY��r�����q>�����f����I[u�(h�p箿́�<1�.�m�L1�a������s^����!�P�޼ʦOg|2�yGm�v@���	�"oo�_3J(��YԌ9&���5X��-[�2|WӺ�\_�6�]����V&�eso��1��Q�q��}_�f�;�Ǟ:�W��Ċ�f��w�il28�V�#�!ϧ1ѣW�0;��L��
���6*t��T����ӫSq'J�;ڏ��i�}2�����k��C�J�y0�e�c�wr�(�`���Ib� �!Q�;���`џ�� �������\������ax׵g��r����N��s�M�}mvӬի��������/�B�}>��e�a��?�#�4�,����o�L,景H�Qe��m����Ҷ�~g?��U��UEk^�SԷ_/�s�i��m��C�Vp��������=\ο,ISD�GsV������w�m�X���ހ��[9��G����}�Qh5/*8อ��������0���uC��ֲ�I�g߹
�y�u���|�����uO��T9����{�y����ϲ}�rm�f�,<�N�"����ު*�1�lo|���~�d?�)��v�h��%�K�9�6+Sj��������z��}bc�I��
�[o�?��5��io����c�
"�qް���m)�3n?���ٿ��u��l�2���7��/kx�ax�C�P�ե����~8/<�n�`��v�Q�6�۟g(H�S5�Z��LA���%��|L�׆F��>g�V��-�6��^7x�?�����������7�r������J�ds������aS�����<ǌY��;g/z�� ���a3���944y,���M�ܗ�����c³�k��~ܺ�G��l9�\5�����n9�D�л�w";n�a�8���`Ѭ��!�w<�Yw猭Fߡ��_��~ع�j���oV��ɹp���w�����k�n���!�Fl�y��&����;]�,t����=�����kՏ��;V�����w�|~����£/��ش�R��bu�tM�g���WyL
��f�k����P>��h�a�vmO��]������^p���|��G�����s`x'����__�d�RM�e^*]�M�L����cߔ�]��6�q��Ssk�*����A��P୬���k�_-_{����ʓ3S��T!%g���T���+�̂��߻������K%gK
lpu��90��o��GZ�)�W�Y�l�a;�6Y�ř�@C�J���5�un��/X)Z�q��c��b�2�m����_.�o���zZ���e�l��y;L��N�V6�l΅��Q,������|j��L�g�����s�����-�['g5�F�\>���k�'^\|�䤲��i۽��
�xf�	��]�63S)eΗ�O��c:��L\Q����9�c���樜0��2�����d�!/׊[�ޒL=�;;����YOJ+Ԋ��X�e�R��_k��g��Nn��mko���}�r���`!O+�G1Sm:��</���˺�{!�gg�S��O�%�U�	���T���Ŗ*�KsQ��q�+��V��~	��)j�+�wYih-3�`��q�h6�9�I~*R;f{�2�^��&�-p
�>�>��y���$&�LU����pN�%ˁ]mF�?]Ϊ���y���u�R��fX�8��oz]��I�(�?�b�sC�ꆇ^+>^�,~�:��]�n��R�|���o)>�CW9g�lJ�b?��S{O�\RX��Y�(�[/bo���tU�T:v�����;m��d���3u3�u�\�<��sM۱�
���X��эU�����}��'�P!�c���^wf����\�.S7��&��=ld{�E?j;�{5���F�Ӧ
�b��W��Nk)0�{%[۫�v�>^UW̓S���S4oʄ�{��+v������ܛ^BS���4��,�W�R}F~H���Y���>Y�Rl�ȕ��[���?{�����Ey���z�KGl�s����E#v�^h��PI��r���V��8r�jV�ݝ��vY~��8u6��,��Ri�:g]~^���S��E;V&*�U�L)��k�����_��O�oE)0>�s�կ�L~Oc>d�s3��W�{?�U�>��q��s���Y�Mt�N��T�lJ2��p��3���;�~�ܢ>����#�����+\�s���[�v�L�����ҫ�g��-]9�u���R��ś2D�EE�V_�y=*t�ֵ�����>��;�Q�͸e�,S�B�N-*�I2�@&�Me��\ΒGݯO=]�䪲�$%�[�A��apƊ����;�AS�G�S��'9�?⪟ofı���{Vm�U۷���eӗ��ךx�.�����Җ���7�>1�Vy�����-+ބ�Ӿ������6���>ع�r��]v����Vr�f���7��
_d�}��c^�v���
=W]:�=��H�ӽ�Y5�S[�ߪx��W��2׉3'o��x(<����z�XK��D�N�[.| �?׶�b`8�sW��؂�Ѣ�QݜI'{.��L��yG�'����Hȯ=|ק\x�!j#�{�u�$�2]Y�4����b>-Y���Uk�i۞����2����(_��h�������Ά�w>7]��Vi��QQ�g� �]!��'S~<����g�)�ԵOxۆ�Q���}�k,yu}�MK
���|�/iK<9o�Z�.��8�t���L���r>��ou�~a��sw�3뤫B����e���1-��������FFv�G�QN]B����}A�$>����'�C��/=���xx�֥��������\ylz"��wo��1qq_g�`lG�*1E�X��{6�um��
u�r��eɩ�����¤4-ɛt��[����AkWE��\�&Q�5�̪�N��|�C��^x����Xs�XTʙe{MA�������R�]�9_\i2
X��Ӱd�Q����+��<�<����=M\�?�YK���,�Z�L�y�cٍ�._CO�����̧w����թ��f>��(^2�W��.���~[��?�S��F��Mr�w��/�^n�f�l�U�^�"��o�N�1��`������z��o��]���T�I�a���:�J��'<�j�R�p�t7[gǄ%> �?�R���p���k_\W=R	�j�I��b�҉��A�j<LMVr\�u�k��d��YZg�;	��.5����L?0000J#2a������3�ܟ�a�v�hn�XjDDf��T/먧�'�����n�Է#;t��k�Ҥ'���v�YɝZe�C�ǡ6N��3�8ϯN�a��el��š�3�%Cpé��^u��T+xyU��s2���D$_0
���d���˭}Kvy.)Y�}��ߓTI�ToY�B��+|t|�]�,ј�1a��v�)��+!���z��Xa�pQ�٣$$�y�d---^	�'%!�������o��W�Z�-n��&]�n�R�B�|}]��
V�@��]�h�p��.��\ _�5�
```

---

### `objects/f7/d66a20b53670c9ca1ed7220994e73a4ed0cc52`

```
xK��OR07��`�����`��]*a���)��ʺ�:�כ���$����f�4*ؑ3'�����щ�C@y�ٳ^��,|��$J���Q��Hvr�7��'8rt�}/O_^���"�t~��߻�N�w������dp`����;�����?013���>+`<���pϿ\{���
���kx����
�!Q�慢w��]]>�t��ɦ�O��S��~q�ٷB'�}��į��MU�Y��I���d��w����vN���-�E�z��ӫ��W8�,:��&A��m^���J.^ћF�"�1�w��X�S�c+�{���l�@ƿK�ji��8aR�DgT�����:��:�Ƅ�И�����Ĝ����y�z6e���-qpC��p�����9B/�0��������y�����_��Ī�!H��Ͻ�g�I[�_Y?'O�L�QU�Z#�rKu�ݺ����L�U�n͹|���MZ�Ou#��\�m\�j]�ezMlg|(����h���V�é�hNG�Uk��3��x�pk��d|6�Ń�ō]��js��A���U�|�W�[�3���O>:�8�O�4��f��R!���/��T�n$>k�ܱd�g�<�����_T7G���cޝg��9\:�V�n�T<7������{nM�r����i��Պ~�/�Y�"�<�f~��@���gs�}�q�׾����7Ǔ~(h<�$���V{�s~Rl�.�=��R�(rw�ǃL=�/r?��Z�pn}=��6�>9#P�#,���շLSs�-�yu�8���t�W��]V�fヿ���}�;���{�W}޵[j��m����E��0̻��/��_f�����?���ϳ���~p-��Յ;C�}�kw��z\����7.>x��]|����#�ǖ�.�S�(�Q��d�I���+��=�ݿ�Z��`G�����Ғ���{��F��y�3�s�,���
O��h��>ۏ��\���V��-�T�8vpE��[��>a�(j������k������nY�Q~��W� �K�Ma��wW����gzR���_��(��޴����o�9ǭW��Jtݎ��5/�)\z�ʼO�Vzݱ�,'IQ��N��?K�v���O}!���sY��X�o��N�1Q����:��aן���t-͞�?��q5K�bϔ��I�Į����bM�M���z�|�r�d�Ϫ�������.�8��?m���������u�ŽW�
��]r����93�(�n�����3g��K]�V�kl|���ɼ�Y˦�z�T���Y^QՖ7�W����8¼����C��>����ʈ�Δ�����Qf���"9�K�T���M�;��yb�>�8���Y��`��4%���GJ<�u��r~7���2�L�V���qS�?n�;U�_����5���9_�;w�������}_���+��rZ!V8���d������
����iJJf�^<�u��7_�]6��ٖ�:%�ҫU�w��S�,�k����ǬS+t���}m�H�G'>nZ���H�A���;�.tZ�j��9=��M��
/����BN�D�ͺv�_��3�n��~�L����Gγ6�yȤ+zh�Ɔ�l��%B:{��l��|�����?)xĥ$�\��Qꀅ,���z{�0����n�.�Wk���+4��,z������W�G�}�ݫx���U���sj�tԶ���~qF����{[���q��>�s[r��+���""g�m��\a>i��k��O^%�u}}���f��ܧ;���k��o���o���K�gƽ��W8�0�ȷ���_gK�=sSdV�N+��J��^��KN���2M̨����1��嵕�Z�E�H�"�z��zԒݒ8f�����n�]nPj�Q��p͵(�ϼ^b�7%���n|u�����ӟ�7d_���kŲ�K#n}y�Ο��j!~q��+Uk���~�6����M�G+�uݎ���Vm�����w�>ke��bpHYz�����w���^�Ϩ��Z0��Ȟ�]�lx'9��)/e�fk�� ��i��~M7��~PՐ���p���v��2^�W�&|��$���e):�SYlX��%oMal;���-��v�]i����\��l���e�M�o���a����T�7���p{�935�O�9�O�����a�\�:	v��/CCW�x)�����Ϻ�
L��n�zdn1\��ZaBq`�,��3ϰ��X�L��ԅ���n"���G�,�lZ�
s�E\
�.���&�+gx���\֎_��z��Mg0��^��������6���{i���΁��Y�ؚ�,L�I�(X)�︡"����oŕ�wL`9���ÅV���Y�
�}�^�ޙ��v���LA��'%����0��r�����©M�n:d7��IIv�2�1�:l*��0�CI����O�{����[H�M�N�p���|�����n�e��`�#!W
�?�]}e�׿���%4d�=	޵cBǮU��n���:�m>�[S���עw�d��_	�o���cVm���\XxP0k�fV���9Q	�"�V��f�򼦓�dX��Ο[.ݤ����3Y�����/�>?3�H�b[��â���i@��i6/�Eʮ_y.�5c�k��~ٵ-y-�+�
�<5�eo���w��1�Q�%Sfe�r���)��!�K=Ϥ��mSa�.��v�WÚ�m��
��O<iz�Šu�T�C��O�|���^�⒛���.j�.�n��U��Oa_g%'UU�tQ��@�7W~o�s��Ƶ�_������+/]�y�)����٢����_���,��#�)jާ����N����ESl
6.\r����{^3��)v^�S��-V� �����h�f��d���I{��s�����a��',ŮY�-:�G9x��?��������w��k��'!r���
�2�Z帽���}{s�oY�*Jf��.�7������T3�謨)��<�y�j�©�a���ޙ�}�l�%��´gl�(�Ь��}�(Y�v�ӌ�3��=�Pv7�M�Ys��7��Hy0\a��x�B����@��"����ۺ2ݯf/��)�m�?eFռu��J��$=/���b��V�1q��M�S�n	�Vpf�S҉N�gG>̼mqa��⓷���\��>���g�v=t�:_^��1"�Lw��(��������?����:�c��k˷eV�K�I��&e�l��%]0��-���+kcȇ�;��J��RK��^��/�KlwOn���UՖov��o>oUUU]�^��K�����<����?_7]�������I�4l�9737D��+�yvݏ�?�����������[�o�۪���f��yJ������+�x��\��z��鯗wm߱2K<�Bā?J�Lm"������s��-EW��1{�,c�
ޞO�H�<]h��2�a���m��������ù�;�e
���4��gp�p��3���L�b�?�{8^���Z x 8�-zUچ	�>����3�xI�.6��ss{��ʘ�?;���\�+�p��s%O�;k;��y.�0Ӷ�jN���:�|���UT�\��P�M��k��Eٚ˖ڋ�h-��DuY���;7�7��Y��������~�3�����Rc���fΓK+��|��l8��r��
`�6�N즰Ы�����hϹ=�
�.�_�3\����׹�f��]��j���#Qn�U��g�ڳ��m�^޷�{2�/�oU�a�yYx&o�V�N�&3��=�h�*��������rQ��[��<L�'�6���YTlTԨvX�ֲ.p��b}��E�Vnf�c�5y2��ԝ�i����=��BKj�����pI�YM��SOi�¿�:�Uówg���v)}�y��������6�^���ק�v��������
�Rsk�]切�k��3�g���_�~��yq���EO�7l���b&x�٫�I���+��������?g�X� 󈄻^���S�W�X�d��~.�g,L{6����?�&�2��ZV��A���=��t$:���?'�*�K��oap�Yó[;<�8{�z�;9�μ�_yx�N����ba�mZg��._�_5�l���;w�|ּ�j�&�X)&~@�񴄂����/�Z&j3'��Tr�o�S�-:m�i�:_�)�NT�O�h���Y�G"g���������������O?v������1�[�B�7�Y�4	㠒5]l�bs^��,��hx���(��!�������,��vA��M�L��i��	_XLZ60���p��mg_�l�ܕ����WK�l:vW/�8��{�k߱?}<�TB)B�0����v�q�BO[�xk$�r��RX���	�b&���v1�j/l���)�N��t+�ȅMk��TC2�쫕����6����)�7���������V�F�S�k�&FZ�P�b�F�ꟳ
%8@�P72+`�7cG���y&3�#���>����7�d�n�ް`�����7E�v�5Ͼv:�u��i;�w>�7�g������2�6��} �Ͱ�14y�ϼ{xEU�8�h��_ş��27�o���ϑK�V)��Ϟ��T!��@T���׆�KR�������4]�h��9��nwJ5T���"��[Q�"�s�vFS��"V��M<�πܯ���.��޽
�yv�Z�5%�~�5�v�2tm����?��Gݷ�����_�/�~W�z�ْɧ71��]��r��C%W{��I�����wn޻��^Mig/ٺ���Ͷ�G��v����67ZL����ZTw-bX (uF�]�Q�ٔĀX�5�: ��}��		ƞ]�xXr��v�q1�I�z�?����A�ו��������/��ٵ[����|��O��<�o_���ׯol^��r`�x�Ŵܽ�e��Go��*dSQ���w��Y�sޝf�f���ҩ�L!��[�ׯ��S��g��gl�w�>`b��������U88�
7�u�b�8�1���e�Ǝ�W+�J��1e8"ü(�х)��0�,o�_Ǎɇg�m�d��]��j��j���U/��a�˷c��/�?fl�Sfq��)n�`��B���9W.�<ql��ł�ז�)�X����ٞ/���Jr�\���r��/���YY�b�MZr*/3�*�7,0d`l��)Y��r\���DEBC�D�	�^��9/$$H��1���ߘ>��us��8Ϭm�_��[�7��m�¿���8�Th��+�[(k�W��p�%MuUX�]���sV��u7�kꢹ1*�d�O����Tn%�/����_�5ɭ�6P����r����/��ur�:��T��q��a2��5��β�笼�_��1�jr�α�pȤ�����֌3J!��L�t�[#�iz高�w�g�1��{���������κT��B�NQjo��0WG뮵��G�T^%w|Y�',Z�:.�ȼ��M�U^�vTu��x��4y�q�����.e_�4�� ��J�;���^x#��a���!X$�(�+�i��C�wk]暰l
�<�����W�\�?={spE���������W��/������n�g(+��t=��S"f���ʟ}i��?�;��%�h��ƃ61NQ/��Hy��kU��S��և]��8pѹb���!�J����?_U�ȁ���cUW���d���26���҅�m��#
���Y������Th���9�t�ҕ^���n�jt�c��?7_���W�;�;�I���9�%��;�ڶ�y�f_u/����S���/�ݜ�����Q��4Eӧu�U���m9ŷ2������6�l?c�~����U�������\�&����΋��k���dnKoߨ�r�^
�W&�/��T6}�+�e%�&T�Н8[Ϊ|f�f�N�w�C���w>������v��_���k97�e^�و��j]�ݿ}�^��S�|����~�����ߔ���i�g\\��:-7��ᄭ�f+�^���~s�kc�%���}�ő֙�+���ו�c��-�����^f�{g����F�͙��x˂���75m6=Tj]r�y�C�4��y������ǦP��-��u�Y214߯7p�%�U_Υx����}#sg�e���D��Y"'q�N�
RR�_�׶�P����vμ����t��[���*�Jt�����E�*�_������+�����'�l�����K�
]
�;᪗��s�6V���r��b�d&�G�������W���qYݳNp�y_e�#��nw�V�_ծ>����ds�y���
�,4�����e���m6]F'7��V��5��s����
�⵶�.��%�W�-z�{˶F�tM�YD�����-�:[2�L~��rFX=JeWgw��K���/6��\r����<���Ig}�J�5Yqj�uf�_��\�%�M�c�����5�t:5����	���NYQh��H!P��7���`8,tg���S�y�5�U�t깾�ۖ�/��ޤ��x�p��7�8��ŔU���M$[�l��wK����r�3�)t�G��
�jE�1g%���m�Zuj�h�W��.�M��.�lRv�K֬y^g.v����>�oo�`\�3��!����}ys�>^�P�.�~�p��IG���%��p�ih9hi��˵h��:�I �?U��a8�vw[��u�]O�C�sW���vn��|7�m����e�5���c����\S�3U�mی���*u��.��$�t�\�oRgp���E�9�k��]���7�c��NQl�\6��#�xT�Im��ӌ�^�v�rd*R�I�Zd��U�wOe_�}�����b��O�f�\�3A�[��厈�ʌ),)�-ĻӸ��r*Tu����Q���KAw
�=�UW�e^(�hΥ3�{&)�h2����L�k�p�hZ�o�i�p�A�ܚ�7Lb=��I�,����?gzu�,n:>}w˭�¾[]��>�d.STwi^�����-מ�;�R�sị�����WVr���u�.��g��]2�w
��Y���T��,Leǅ)���f��b^3�Kݤk��#�� 9U���i ����c����ÐG?��:-����uir���i[�n9��<9����4s"g�H�7]�mqy��ߛ��en�
N�zi�]��bg�<;͊���[�_��N���/��6�����JoʞZ??��ʛ�#��YK˙f�,?޻UMj�M�$��U���ݛ��j��J�Wz�ҋZg
�U|��:�������/*�n'�2VsL�m
r�s��/�|�>����p��L�6��ُ��&��L_����¡#��.\w�7Sjr���G��t��ā ���;yކ�z6]1m1�
Jbb��d+8we��mWp<�`ui+[re��6�����6�~Fh��]�R�X���`� ��7:�7O0�r�K��A� �G(
```

---

### `objects/70/12d96898303f1cda0ed6cdf8c1aa4e50c95016`

```
xK��OR0�45b�����`��%�ca�l�+ب�?�p�<��(E�UbuV�6i�X��cuQ���3
�)܌�7,xs85)(qN��[}���͗
�mI|y��2��f�Sd/�|/x�`�`�g��~Q�y}�i��v�_�P)¯�����ˏ��Qhxtx��Cg5��Y$<3�G�F�M��.��'0�]��x�F��k��.�UjֿvRp���Od@�T[�O�1a}]�i���=o����X�N���VYʧ��Qտ�ɢ^�oB�n�����"�ҕ�㇙�=w�)U�������w����{S���.�V�z�o�T��'�����M�)�UX�R�e������ٓ���^�y��L�S����V!��!�M饇�OZ��~��w��eFK<f=�4�UbV����W���I��C��~C�5f��00l�s�a��v����OY.3�?�"v��I0���g�B��b�xx�p�162�$���⢹�K�'v�r:�	����0�������	���)�^<d�"����K�������e�(��?���u'��`�|�������^"5�׫@���^Oŕ�הOtZ��t�f_ӊ�woz�]����A����Ϛ	r����[��Ls�'`������IS��H-�0){�����?�o�m4�-ˬ{�9d�͝6d�$y�M��f鉽�V_���˳}_��.9�:b�z��=�6\7�u���w�[V�9O��8��\ɦ���z��~uoz�:��z�u��g6���`"j +*Զ�j�V������+�<�q.:�2U)��i��A^G��Me7Pq��}�~a�"��{�f�1\1q�oֲ�,.��r���Ir��q P���6g��M[&8wn
�P{{���ƕǚo-�s�� ���|�����#�?X��^��rbCzn����a���η�:��sj]��{QXp��k�U?2M_|c�%�����q��q����_su��/���.��xV�Kj[X��	�J�[)_�ך��L�/�ڹ���"NT
-�_E�Uý	{J��Ty����4���ײ�;�"1�W޷Zg�����t�τAȭ��5���-�g�����pqfl��a�鋃\�[���L�SU9��r��m��H�@�6G��p<Ɯt�t���STN�Ȯ\e��f�������������vw���ąO'1̜�s���ywk�|�x�����CL���~G���/��ۮ��޹=�J�ڂ�l
+���y��=сg���L�¾�_�=�p�q�4嚧�|-[�)@�`Ӣv�]��hq�Xt��ɢ�=�nj���V&�6y��H��{�n�*��7�oE���M���K���":��Ձ�N�<
r���?w����ʄAD���o��n��
�?[f_�v[��r��Hs�Y�l
F��_Z�Wýs{�D��x!���t�ݷ�X�5`Z��AT�舳nsb��ǃSb�����D��r/〣���z�.K��,�Y�|I���V�Z���>��T�8<q⽂7~E���
9y��mMW�O���>�v�<������ii{������*����\�������ZkG)]����
��5�_��v�=�2��R:�M`��V�%Vk��&���ٟ�?��<��$O:hC�䴙�
���U懺�Qu�.�/t��F��ڸ,F��>�ʪ?/�g��R�nxx|ǃm�O�ܜ���̙�Ƃ���b�*�lr����xr�\�wgSJ�փ��_w6��D���G��lv.ω�z�S�q�'o���ow�٬��+�S�"8g�I���)�]�v���T9����M`��aʡ�j	l��p.QVa^6c��E�f����9!�o;��/�9�&`�Ѫa}B��z<�޵wv������o�J[�
/�(����\������ݳ�V{|��WFr0?:���p���� 7o��7O/���es�]�>�蟝9:3%���-hpW�V=��!�ı�O�c)[g�j��Ӝ$L.�v,UZ��̄��ioF����fꂛ�0\�7�م�������qK�}�U<
V8^ب�,0��%�ev�O4O<�ۮ�m}�x�_�,��2�,�����V�M~\�_�i�&���^\*�"������X�j|^�t���uyׯU�L-�=[է��"�c�ʞ
�3&�H,:r��+�����z(�-rx�����¢��?VK����Su����uK0��ڞ ��GMs��s�h�9j
_���?#�b��ঘ���1/v�0�$��������-�>|�[���o�Ǐ�*��
�b`���r�yPٱ�ptѕ�}￯i}g��!y��ު�ü���%&\|xs��߂�F�L�	��&^��2Y���N�AV.��gs�֚���.a�T�v�md8��a�ʘ�ٷ}����Ta��xJr�ڝ ���;�M`�ֲG�g[��\�Y=�}ޙ_~U�ko_��\�Bo�ր����n���u<(��������C����Չ_9�D�|��`��6�$�ޓ�:
�u^�*��(b$�g<�[��ƄU*<[4��|Z?�6s1�*
�X�hM��<s^\����7�
t�m�Ijs����e5�J���)�jEv)�_��Sj)�����
m��s-{}m��P��N��]v&���������gz��������zu��Y��n�0�'�>�|5�����
��_%�T���ܨvź3V�C~F2->�p~BkúSn��bN�	
^��9=x"�+�ƈ��ٿS����܋�y˝������3k#�u�罩�w�sX�¹��˗ʰ$d���S8�^95rҫʌ��� g�}m)��}j�^�Z�+˶JO<�k�(�Α5WL<�x�����2�f�o8��/5W�������M���ܦRQ��3�jMjp잋�Nf';��Q|��T��n�׏������yܤ�����Tj�]�t٤�����.�9�k_���Yg9>�Z�s5f�����eΞ
��D���u���m[?%�$qi[���WJVī�(_s@������~-�&�9ϫ���q�h������.vƝ��寫>��Y�1���s>mO[��o�Bwg�*��'�q�V�{�)��B+������w�NǨ���O�������_|���r횢QA�e�,�}z��g&������E�Y�U�F�ޥU�ɒ|/$/�v�_���U�/t:;�Zf$\����s�A����! %HĚ� ��-�����a�`��r7�%�o�dϓْ��hn�f�W#�B{���٭Y���3m�&���o�:�ܖe5���5��o��(Ӆ �֜�]{�^�l?���n�ƂZ\�˛������z�/���ճUx[f=��y��iϗP�Yw�9l����MZ`�@P�ш"�����t2a�t�k^�����s�4y]>?��%�Tа����*��b�	L���8Q�A��x����)	+�����x6���8����2n޾��ᕋf���|����*��.-Jw53�V�=�Qvu��yi��2_���-߹n]���W6�Wjf�ז��=z]3������g�5��~���v�Ƴ*=�
��VYv<����l~�����cє��jZ��/�|-�YB���Î�qǧ��x����r�{�3r�1��JN=y����|��?�J&w�=.����*EW�̏�lO�윷��e�69.��^Wc��G�w��������#?�y������\���KtrSaQ��/R;W�����;{���m��*|�{6��~:��s���e̒["�j�O2���1�윑�h��L���m����o�y����	G��ٮ�Szg���[��q��� r�3�+V6��n0�M�ݟ�{�m�B^z������m�����f����vvm�^z��������4�߬�epR��%?�Mm���O�WMQ:�-V�)��h���Vf����)G^-7�t��>�����w�j�Ӣ�cO�]̾y}j�SU��Ӷ>n���2;/d_��������]��%� q�Ԭ&����:��p�Xj/��ڐr���}��0D�\]�̲o�����f���Ԥ�⼟RC�Bz5s��M�^� #m����L�ɞu���n��N�`���j��Z�w���t+�����S7�7/���ҲY�v_�f约黷�>wv���������������9�\\���g�q��͊��^{W�N��UV?��Q���Z���&����َ�]e�B]�U]W9
r��έg�7+�^���/Qju�icѪĀ��m��j�=�d��V\����Ո�#�s��·�v�ξ"�w:��nݞ�kۛ�_W?�6��h_�/���:)���)��
���]b���Ȥ�aW�HW�?�=����a�����a�������տ���n�Q�cL��Qy�jzhЙgi�9E�.r�g��=,rT��Y�+_�{���_֬�_F�YI�����_7~�z���ȑ�c�'�l��+�x���i�3k�%m�}�wa�x���[M^}�59�����un��9f�2�X �}%�¦�.�/Z~4W�v�����SW\1/*����jN|l�ǵ��z��·�I�<�2���+���׿���*��^�ݖ���'�f(�ռx�B<��㥦X�\ιJ3f̛��r��F�,��{��;�̞%����;��ʶ)�\(匉n��+�n�}�dH}�����3���e��{&{����K�N�Gf^����ľ6�os_�k��n��k��S�u���Fs���|��V��z�n��%աg��9^y�yBv�����W�����Ȋ��?�9�,����YO�i�S��
�Z��.Y���O�S~�Ɣ)n�����1�Clw']�8iV���S���y���~��y�k�042(�3p�~(�J<I�p����ő1�
ō>�w�^e:-=3X��di��>����\���̽-������Z���s�=��c��٫^��Nq�ʯ���~�q�S=�k�}�?,]`�%�w�kfvyG��j�%��/��!`s�	��kOl��̻h~����I��zM�v�KJ����Z���M�슛�l�׬鮈����f���&�%���m�F����&�TlJ����z�Q�3���/��o�ෳmͿ)����9���Ee�ڻmv���]�wo����%z��ת�>���K��.n��]�l|�j`��
orz�GU��ؕ'-Yqj�6%�g������}:�r����~�g��M����2��D�-�N��M�J6��1�-�^"8s�n�S���m~�W�/Xt���h�k����?����I��G�}|�vr��Y6=����+�O��={cMcSƌ�E_�m\�t�k�܉�毸UgҺ��b�����-s�Ӿ3��ѷ;4��Ln]���w��d��=o���劯�����)��[M�?ߎϻJCk+f���*���������[�A�/U�Q�ð���U��f./6�xg��
�=�v_��~�f��ev���u�g\����ayF-+Q���b�_�z4M��I��]j�������g�~����-;ێ���n��P��K�Ȭ��*��SO���tʴi�;��f���H2iZ�l�۹b����:��j��yk�o�^����ʮ5g�s�Ly9������+�[֊�
���܂���@��R����`���h������>,>������˵~��/��=q厵��Z�DoO5���U*F'L\6Qd��I�	�r���4�bYw�Ӝ�+�>�E�a��p����S�ߒc��_���%u���爒��֤,��*�5���Og��%�+MϽ歹��^?[�����&�HD���&�L���������A(�ܿF͇���0�!D ��!n
```

---

### `objects/8c/fe9d5a97b388821567a2059cc941a96fbeedfd`

```
xK��OR0372`�����`��s��0T���oom�y��I�G�����7H9x��d�'���2��&���Dv��w~۶�96s�8�p(4��W�i���(ȑ������:z>J|���݅������w�wt�|k��<�C�E�G�ﭵ�ܛM,JMe~�w�=�pIq���z��@E��������������U���}.7;�|��i�R��	�[�A�ӰQ�a�w`��ωlY2�VF0��1���M������HU(v���e,Q�g�����3-��y���&N�p��判�o�]�S��R��-*�)Y���^m��if��D�~V�p�GO^�.��ӾI��� �OI��fK{��_��U�1����^�M���0�z�j��ۡc�x�Z��&�g��/Y�{W�)��B�R��@��0�1��8��q��.U��D�����,45y�������Ǘ��Y2���⯾3S{�}}�1Q��tM�-�]׳^��3[�N�������k8��أu�/��&�$����OvFf>|�����먇m���~
������K��Wַ���ݿ�{=�:��}}'��{��L�j�ZV~c������!����C���~Q��_S�T00\a|���+����5a�箾�5�5�kӮ�j���{�Z^x��Hݟ}�
~�;u�8��X6
����+���+T�`_�*8�����:�|��S�\
޶m������忝��y��{�V�q��栲�������5eZ�i���w]9z�<;./[r� �q���t~�4%�Fy�ly�>x����˕>
���{"|@��3z����܎���B�ڊ�<3|VwJ����$M1}9��!�o,\�E���oW+����4�#-�4_�_�Z��1?mݬ�������㡣;aN��I���;��i{�q=Ӛ�����f��x�߻����w3����=��3���ٔW���TDב%��.(�LZ|�Q1U�2�)}Ցv�4��N�[2��^�,�f��/���5����wAǎ2<c��i�������}j����WW���<H.r����Ovx/m>�qGg����v���ˬ5~��:N�n��(^R���z���y��)Oa��w�J7.�����ƒ�3=$&w2+����T��\W�ʬ�� }��������������J�.x�w���zͯ�<{t��ں*�����V���'(�3��s1)�_L{�Póy36��1�|��(|ۇ&�6���O�M�z��_5�n��Hǆ����=8�$N���뚺�ͻ�p�>%�>3����򝬂����#�t�l���"�}��f|����-��P�/ѵQ�y�퟇��0������E��/>"\:�[�_��`����=���;��p�v�Fգ����/��B��&���@��y"��p����m�V�����u �8��I%�B���$�-�|�qO����J�Z���z��޼����ˋ�-^����Ѽ�W�m�9s�Je����;���M�����˕'���Ԛ�yR���:'��G��4u-/-W{�ŧ+�*�S���qE��V"��o+z,�<��'�=,���^�{�,{`�r���`��t���m�7S��r��%�z�Z*{�;��3g�˂#K�.����RN���]�w��e���ѷ��zO]LXKc�%�[]���^��?��m�������|��λ/%��_�n�Q<%��ƾ�������n���_Z:��}��Q7�9���UTuQC�10��f(�XG>s�'k�?9�����v[�h�M��4��,�b��1���خI\���o��bT���s�]m��OR">*䔋z隻k�ΰ���Fo�����2�:x����-�}U�>���Q�Xץ��,�-��#p�ɔ�;rO��^�z�w�i����G���+�92
=U�<��h�p̀��t	�QAA�G�b�����L��~��Ǆ���o��}�y}k���(��_u9/me�<�ږ%!Ů�%n{�Q�uZ�i�j�]� �;��50hN�+/s��q��]<��_�ڵrG�K�/�_o���o�6�1y�w�a��������_V�.|铿z[b���l+K42��;;-���O�w:�5�����w	�.�`vU�>m�ǆo�(�ܯ�S?+b�D��M��^��>z(8i�)��/��VjqE�dNk��{W��؞0k�*��Y�'��m.��w�t�e����@�Uٹ����6���W�5�3��/s�4������n�w,ܘ���Q�7��5�Y�x�.�hX���-�k�~3q�~\�PR��"����B۫�5n�v��M�hx����E%T�'�
���p�E�z�4�c� 0�[�$xW�~f��WB%���nb��;K��
���j'�G�޿�7⋈p��_ͻJ����kյ�J�y�hghP�Խ����+mtL���1�x`���G[O�ƇV�$�ZP���A��NKzbX�s���g�cb\[p��h�;�B���M��X�C�6�s61t39�lUБ���!�mA���_CKK�S�
�1�O
w,X��p�U�({���|aqap������!U��^�&$�pn�������߂�?Y���g3�:��n~�dԑܕ���(kI��[ϝ��74�,l�X��������tw�|�1Ƕ��̯[�>E�x��ѕ����E�}u+�fz	}������]����eJW"���b<#6V"mҡ���NL���Mc����>�ʏ�˅�Y,#f��~�������T6�W�_x�������&9ۇN�.�{2x_W[���� 9����'��a�'7����R�sy�?�T�z�p��wQT�as�kM�<�׽J��y�{��Γ��6�q$3���o˅�m�r}fr,r[��'����xpZ�F��%K�}p����zoI��o���ޯ��P�v�T�Zâ���C���
ێ��j��i�qTC����pҴ
�&bo����Mwf����ܼ�7�.f��ܿ[y��{A3DV'��Wؙ�Q��_��סo�|X����]��f��4^����l~�]cꉢ5s�;/���B�ͷկ�"6̗�y�.����F�H^�CM+�.��=���ȭ�ݾ����o������R[��hۖ��7X>�&���T|�@D�W]����	r,2.<�
����b�&2��hK��ɧ��"k�+�����0�>w��]������?�N�N�wnŃ�)n��IAf>�ʎ	Ņ_kc��/�V�=u��}O�Z8%��-A�mSw��>��n��-���).SܼWJ�p�1����T�r���Ċb�ޞ׺�F͜�5wJ�I�����_���$��]�)%ۯ�_�?����I�<�t�~�v�>U����6�r	[��M9��%�(�(	r�S�)V	Ϥ�T�l| �а���=-2,m�	^	1�
��j�bb�#���)��Id�^�U43�uБ���ˣ�mDDwj��K��DL'����Ͼ�j��Lc�riA�c�����;�ֈ������2�'��	]��;��z�wrUֱ����o�6LZ0��ݡ��ܲ�r������̅��=�p���Ɍ����������>��Gm���M���̪'�&gT�o]�����JL�G��!�"[���P��VBlM���_lB,=��>�u}����on2��>�D@���_�8���c��<3N�������Hx�]�5;(���rꪽ��o�lٳV����D����X᜕��&�f1�&u[C��aF�1����ܻ�yI�H�=b�{�N�&���y ��Y5�`x'pwu�L���{�϶I��BL���
+Ŏ*�)r��3X��v%�z��y�x������������5����7�viϔ̹to��1���'�l6Z����㧭!�˯f�9�{����^T�Z�&��r��de`qPadfx��������ON���%��Poa�s��;o�e�<���#���ת�>3�[:���t��K
�~-e7����D�ߍ�9s���C��f���J�3�oj����	ɺ1%U̒j�����ܲ%�]o~�Tj;�V������e�m��u;EVHeAǃM����ڳ���f$83�(
w�f�����
O��JVs)r��l��qɬw�oν�Ofбٸ%�`��_���]�3���j\�|��D۝����@�z�)�KEt�V� �?R��ʂ1ځq�J�'W���j�ʏ����R�O���*��������u�w�b��1��.\qJ}�j&�~��s;���.MX�7����Ms�8�(:��Q�!�Ɛܩ
�M^]c˺�h�~�oK?V��ζL�
]a�u�E����i�7�lo%4�_��ꞣ�OF�����������)X��ʥ��/V/>�E�mMb�ȯg ��;�r`�y�a��KK�ǩ�g\�@B�U�ڬl�W�����ڶ�s�P�g�fސCg�����4'���%Ƹ+YG���.y�ϳ�����|4Y��/��=������5�d���>�ʒ:���1���~���������-3_�i�g�ԝ���ּ�LYv��{�)�ڃ���8��&�ov��٫�����'���f{]����jM�&0�'0��ڝ�u���]i��>��	����y~���#/ޒ�nz
���Y�E;ϗ<�|��Ҷ !�mQm�T�{�9���e���5�E����L�;�����Ĝo��~���=m}YY��}�^�^깙���|�����?Do([z����"S>._2k}�^g��b�A��ľ��b-���N��m	���m�f��_G7�[�
�����l�
��m�'6����]��6����a���v��Ϋ�#����d���i���W�����X�������W�^E'۵����<��v�׬�W[~��ܖ��X`{G`aՏ�{��6v\X�u��6ႆZ�H�mGզmU\S�|���y��VAUN�Ӌ�Z2떟9]t:���d����ՃR#t�18�|���q>?��5u��,.����i'떧��[Wd/����|¾�꣛�u�57}�~��ߍ�S�&U���m盶��k�Ƚ��.�l׋���^�o����QkWg<��:���>[|���[�������ڼ{������vd��ӳn]�{�.6�d��>I��z��w�!w�?�ޞ����[��-����{��$��7��Ub�'p��%O}m_���6/��j��TN_ع�i��ţ��O&4W��V����s_���Rlؠ��|Oq�����������5�l��vwn�6T�蔹q�zf����j�����6�[�j�{ɧ�œ�j���o��i�8���Y=WkU���g���Ox8��B��n���93��w��ݺ+
�v?j��:z�#�T�7a!GUD���9ɛ������֥{�v��+��o��y��!����>g{˭��6\��pґ����7���rv�K��܈����3iC�;k�bh�w�p̡�Y�v=��3�LQd��d[W1nU���d�����Mľg�e�Pw������?hV̿��W>�x0q��N�q���.��O�-���%��^RZ�u��tf'��*���?�מn��,1�lˡ�0�|
^/In�����j9r��� ����LT
w��7
��N�bh��sɖe��Ӕ���/��:a���1�C7�I�5�j>���3g�qz���.W-�qj��kߣy��L0�[Q(��L����:F��,���[���d����]�sjEt(o��3��A��Kw����u����{��OS�������=sW썵�����_���{eu��a����v���TCE������v�5Y��bn�轺O��R�Q��o�s=;�)��gg������^�>fY�1A^N/t����,L�9+�k��I��yO�H�$���$���Ķ�3���Ԝ;K������\�}��2��3�O�G���$��.91�~ƪ��[�6i-�fw�d��U�o�Į<[�����^��R��e����nO��{�A�Ϭ�m�
��v�+���
��m��r-Fd�O�x����9���,��+�qrzq�\/����.ty����@S���E�k,{�U����ߤ�����/W>����,��y��9W���>yO����4zL��(t]��Iպ���S~>zS�'�|�`��u�
��l�V��$3]g�����s�V�9�82Ӷ��*�ڂ�\V�������YjwD�0,l�[t��V_b�J��K7�9S5���6�S�Ȟv`	�����h�����k��y�{L<k*���-^�;(d��g>GG�Tqo[%1�QK�p��S��������P�q���q�sq�����d՟ۇ:W-ݸa�z��%{��Z�B�{ݪӰ�,�6�P���+$'
E�p醒U��3�s���s�Y�n�lT�"���k�V(�+�K]��`�|SGKF�.��E^��<ܹ12�E��Qxxx�͍߫W��yr
��.�Y����rTv��DAŦkK%���d��o����?�Ԋ�2�E���=�I�
޼)*���M�"M�����>����z��DP��TKQl`8�u�(�K d�u
```

---

### `objects/16/ecec6509c04ba4b54c29a0ad18a8c7268b8dad`

```
xK��OR0366c�����`��D]`t3``l8�` �3���L�����8��m\\\���{���BAAA_�ݛO.sh�phdbᜬ�R��!�q ����,�!�����_��G&�w������ؽ{��� ;�|�YX~���gad8�����"��v�^m|͔�P��{�Sg,��>X<��\�i���
l �+���0�Z�(����g�qjaq�+	��O~��1����b����� �������n�ɒF�
�>�(���%��P���c��X���ÒS|�jʹ���ezh�Tf.zл�N��L��8���/$-e�\\~�qJ����t�����i��YRiV�Ή+�������[S*~�*f��q�+/�ؗ�kyhD�v��e��]�`��R�_\����[�q���Ѷ0�+�M;������MMd�.{�]Z��v* ��l�7S�c�~�*{�u	��E7��|���wy�䆓W眐^��#�ٶ����*i�(�������O}ܚ=�����+���y����������rz�\��ϓ�%=/�����J��o{$�����<\���t��q3�p��U
˜��,�4���2;��/�{Xoý	{&p���l
���|H��I���b津�+�ܰU�5����AyͮC'c2S�I�y�{�~G�S^ֳ�f������n�u?�蠳�y�R�+��Y?.4�^XX=1���/.�GY~�1�L1<��rKh���U��Q�AF��.�������?@������)���7ޙcG�ן�=�?�rl;�`<1Ilٟ%� �����0ܻ7��,c��#"|�^�
tZ�����,QP��ơ5/غE]�#c?���}�/[�%W$XL|��y��Aw�b�%ɌW��FH�-�|����Y_���B�&�����x^��ׇɦ͏��dYΩ{�;�y�̈�~_��<;K��V�4͔fv-�Wz����+�N��u�ʴ]V�����6WQ�b�K�
��Ł�/������ކV�0}�uC�Y����c�?I&:��Ԃ����!���R����c����Ђ�� ��t���нd�ޭ��"��D6(��0��m$tfA��s�A}���fO�������g����̗0cY8�e��������e��ՙ�^NnM�(]�����G���Z\/���kkh����S��3gl8%�G��L���ɍƧ���r�����˧�(xl9]�xR_0f�P(c��;~�E�e�
Ty�e�Z�?ю�9K$�b����/�48���7��.u����ڠ)G
���s���^�$����f�0�r���*�5�\9�����NR=K�m��yc�M���]�'�Mﲭ���(/{U��V��8Ǯ�2�EE�RE��>�X��#�����c��;VU��2w�����2���ԾX50$��I�Q��u��f����\�83-sˏkϗ�^�8#��މ?�mo��~�c�|/ӏS��>F~�S{+�k�M�Ľ�յ���|x�w���4�I�c�u�U�6k��6�{��ף�gN�r�Q�{q4V��B�(�����L'��Ɇ�⹣
�~M:Q�#i�s�Ǚ�|���V��'��Hd�=�����!?��\��V��Z��~]
���=wxr����~��dݘ���ĦM���+~ܷ�����[���ԝ;{��板��>��{��}����kgv�r���g���,ޞ�'�L��Y�g]����D����+�SU�skD\�ܜ��L	Tyy��J�+�tʕ��BUٓ-u�5�����Y�*M=Ӱ"lo��ځ��Gg/soξ�9�t{�s�B�I��vj�/�/�r��2��k<S2�N٫��)�>:����m.�-�7�����ۧ�]��#�:����?^\�V|?u>t��o\�W��m;��P��5k�m��O�~r�`�Y��	X�R�/�.P8�X��'ϧ��d�g6f�5I&��M�$�x�ޯ�qH� |Hɉ�E�0"s�*��Q����6
!��?&���s�p���lާ�������4���j�y�����~p�������;g�a����c���%���u楓��Ҽ�V)���$��W=�#�ll��I8�w�ȏ��<:39�b�9_��?�*�5Ǎ�OD^,dT�"�����Ue/s��G��3\߳re
�s��x�ITp��r�z�V�������߃��Mw�x75U���^� �W�{/j`�ǲwԁ7��O��U{�շ����6]�S�H08�������n"ܜ!J
!�+�p>x�����f��&a,�/�ŗ�˱�Lg-�����?��zu#��Z5���f
}�te�>`��l��
O�ά��=Y�k�Ven�fYQ���������Z� �"��yy�eF�d#{�'���o�v��ڛ ���G50<���_4�ˀ���g����)0�ݡ]9�I��'��v�=�p~���,�e<{'.�~;;��y��I[�{wi���o��&]�iFᡠ���/�=��.��f�֑����}��	��θ���ז���~����������%Y^��o�k��w��]�]��������Ւ˵|�n���̻��ݍi�Jz�r�r�%L5�X�~��p�iҚ����ݍp\� SyCྶuG��؇^��*-{�ڲO��;o�x��ik�"~fY�'�͕L6�^ͯ��-U�,�L���7\���j�޾�����:m嫠[����z�?������������+�UZ���E5�o��3�,d��k����+��5پ�h��݁�E<7��ua׉�
'bg��{r�n5#���f��K;��}��reo��?G���8����6�?1��Y�{Kg-د�b�u�ȉ]=_��ɥO�7�U���o�X��E��6o�Z���2���E�޴�.������嶢7c��=/ώ������^OUf���AFՊ�8��Kd\��R��td�>#τ`U{����W6r$1L2T�yr�խ͟�)�.�7��̟�~/������U�7\�O�-WϾ��o�X�J���~�i�>SF^d���M�ք�Y͜���
��%�n͞�ʯB���m��R<�h��n[o��?f�)\f3iNFw����͙����I��[�|��g���
K����86�o�A);'�6��Vm	�!z	J;�_{6I$}J��J�����۽��!X�y�2��K�����º���{3��ׂ��@�F���6����ٵy_��l^{=�y�ڳ7��ٜ���Lz�W��4᱊n��?��H�푯M�ަ|hϔ\�t���q��-�������֚�V�[���U������g�/��-��"��Ә�5�ԥ&��;��c��m�ʦ��^|�d���)
fI�k��եVV��;��de�WyEӪ���
�&�-2Nh��R�4l8�&�
r�3������r�12Ob��ָ|MrӾMo�|KuxN����+����������~v���>*�2I(�oIǲ����h-?�^�޷��Ǐ��d�:|��04�SϪ���h�wA�l�[G���uh�t��7V���������7��e

�w���|5/���s���+_���������h_��M��*J�a�#v��f��O�O��_R*��I|�!�^�@�Vή�)ݟ�L�	k���k���_����g�&�Y�&ܱ��a֔h�~��c��
�=+�>k�R4�3�pb�͓M�X)zl����Yz����i�O������r弞�k>���(��U��v����U���%=������b���w��գ�N�2��\Z+qbI�rx���L� e.��>ϢA�ߧ%#��p��]���]���!&ߚx��W��9��~���t���7g���d"�ö�y�#���?:hq8Nh��x��.����1�k�Շ+6��$�9ql�K�}���������{K��c�k>ڞ���_����?>�Qq[�~j���'}}]C�~�|�<��3~�׳W4T�wp�%2l�������BN���I��S��Z3v��B��W�e����Jw��q�{��g���*����c�処J2���M)WWk��xtg���U�^x����.�u>����k�립zx7��A#�����^J�/o)z���x�{����o�����L��2穦��h���c<E2S�fI�ݨ�=��?��I��3Ol��,{��u�J���;>?_Q_"}jo���j�������@�Q ��;loL;��H~�/��W�PwY�Ұ���I�G�NmԎ	���7�Gs��g�o
'��Nׯ>���9&�ֱ�YI"����������9�k�f�?2�v1�{�1�	���6L!jKg*׬ޠU��氞d�wc��X�*�7ן�q��~g9%��٬�8����������i���.L�RZ|Q�j�3��,��y> ��7̚e�pMnG��c��uv��4K)��m��`ӧ�@\�K�7�t��㦿�W\8������o��r����Y�t�YY[�D�Kǚn����f��%GB��Vט���un{pp�wP͢��]�o��r�<��`����?,��s�4�$��9���X����K?�\��Ze��x���&���z̕kb[��J�9X�-t�����ot>_S`8-p���%y�Zc.ڔyK*3��{�=�ޜKSr;,
������Lv���gV�e�����ǃ
�w�<�=�g�a��b�&���*��:/?��i�Ǟ�����ש�k�e���f�����~|G�+LD��K��U5b�����o����z3�H�N]x2J�hR����_�WkdE=ywj����Y��������h!{�����X�0����e�I�u��|5%$�mjm~�2��Ǔ�:v�|:/g�����xݤ<V�.��Pe[��5)�ƾ�W�T"�6�Q�>��(�T�0��]+u�7�M
����s�jO��t����=�����Z��6�<�����Q�͇�,΢�B�<5�m~�\w���N�ʌ�,�\4�c�����^�ɭ�$��VZk��ɘP��K��w�_�x��}#(�5�n���n�kى�IU>�6Wս�u>u�ti���7����錞3<�~�0{��+����V��K!�d���9�Ϻ\?��h���.݆˶���*��T��+x�Љ��U�ވ�,k���e���fwY����!æ�媞t޼ծ��y�_�9]��W�Zpr��(y�iX"&��6{��zq�o��⯃�;�����!�S>w?�5�;_�M,54��C�p��F�ʄn�߷V���י�v�m��-��Us~疏y13�^�s��w_��Z��3{�T�^~f��9�L֍7�]v3t�V�fZv9e��	A���O=V�l�uB�3��:�L�T�7˟�L�ʾ��q�� �{��y��g-A�Ň���f�ر�؉�"��w:�^Ts���~.�7�=	��}�a����d��K�~�]�W.�|���Q���`I��t��.�ݕ5�8�t�p�Y�וUm�1��nݹrN�ܳK�R�n��Һ�g�ܝ�ޫ����e�ӽ|�LշfvW��m<[�3yc����R���ϋӞ%t~U�8'!�U���O�f�W3>����G��K�W]�U<�Ĩ��y��G��;���UWP˘���u��WyW������/�|�lL*���,%k����+�;��K���.�3���M�~M�uR>�ɚ#i�ؙ�ӧܜ-��{:9��ԂWo٪-*љ����oOB�y`�{��W۷=�mv6&ob����y����.y}���W��0�1���<d���Q)oǼP�����מ�G�[�`��WF��B��V��}�Z���B���M�z�
��O��0\
�;a��V.�8($�����әd���2�T�o
~��S�j�P��_����
�r+��zo|��DӤ�3߹U.IھO�-���Zhh��#�Cs&�L
���]54��s�3�v
�����L�3�-u[�Y�D^�	J<<�/,h���a~�ٶ)�-�f�n9,h�џ��{b䴙M��y��m}cΫm�ϖ���@��������nȉL�%����K�>s��5��r��fn�¥b���g�|)\.�&��:%&&/����)��9ET8"�\9E�>��,z������T�9��S*[�S�YW.�d�r٬����Z�+s٬U�V�\j2��"���^�ӛ�yv�e��j �^��
```

---

### `objects/fd/b6019e735662134a7f16a2fc279c910362ff21`

```
xK��OR0372`�����`���0�)�vZ̨{�Ǿ������lJ��&L[�����aA���p�Ѥ-'�'+842�p(��4J99��D���CQ����\P��C@NNNN��������P����```�������]�?&�C�?�I�a`>|�����\��?,g���l/8���u�����z0YTuɬ�9�����u٦k�E'��oKqO�_V%�(����ζ<�i',��8�C���U�D3'����~��pdb`h�vb߻�A����&{��c�S\�/��O��Y��_N�w�SP�}ࢡ���J�O��QTWF�ނ�W����n��+��{c�|���rx���~��{�vMַ5�_ڷ� ��[�fFd��Ov25�0M: ���̽vm�E&����J�j���og��*��*�NC�S�Ԣ��2�n_U=n�+�n�L�iZVG����g�O^�[�K~�|��E��<:.�ڱ0q�.�Ek�ݲ�\e]����qK��)���]}�ȅM����t�'<?�+���͗L�7S��޽u������}����Q���[~����y�Ngu^S�]@c�{L�BU�̽!!��V��vd��۵���/��b�t犵�R�րi}���8+�)6a�զ�N?�v�ݍx�Z'q}���ݴ觜9W�\,K뺙d0e�婀����Y?%��^�����w}/��l�?YS�'��R��K�������5ϼy��iz��=�g-����t����s�PE��#��n�n��P��X�Xt9ƽ�B�@�{�S8*;�4��yy��s�� �K�XU0TN�s�3���̭7�J�*x��t�a��e��o�M�
o澩�b���w͇=gmM���r�(2{pE�]U6���ܕ��^�Os�����Y����S�$?q�ܞ*I���
�7|�T|�ä����s���ڿRH]��Z�d��\f�J^����[�N!����fo���(z|T�W��$�R���@�GX+<hL+�_L{�\�=�=�;
S��C,\�*BL��|6*X|z�ĝ����oM^��)�Vh���"&��e�3w`�˕	y2�Y�̗�zG�WO.K�
X6�l�u���];e.�����9�����".���8OV+��~m����s��~������f�q���|慄ܲ����Z���#дJ��>�}yvi:k�վ����8���N��R���:���s��J�Yۯat��{�Ƴ;S��H�VY�f;�9����+ftذ�O��0�Nv��;o4?�˳6[����_��6	m�Խ}c�I)"^��W\8�sQٱ�e�֎�]~���R��s�|vu�Ҷ������2�W���kB������z]i�ԓ�u����k=Df���a���Ez*����1:�\�2�^����]ӏ6~�_L�Rós{�"6*0X�p(�˶�'��>~=����5���3U|!���mIF}��DE����iKvM2���g��ɏ�m��:v۵�K�����х�AC�s)�����*�t��eL�4u�V�J�m��Wi���o��f���gT���iU��x1������|�ϨuF��wb��9�c5kо�wE��%�Z��A�~Y�d�P�;�j+[u�Yzb���W������o��;[w������p�W��Z��(9#�c�0���ԧ~�l����I�����*��[$>.�[2+���IH^B�Gc�#s,Z_E��w��/hr���|�l�������/�f�������U�KRJ/����/����E���k'dU�\V���x�Df�c�6^�n��!:ّ�A�ӹ#����nc7�?�� q��?��9���.���`�g�W�Z��Z�?�jw�'�y�N3a�-Y�rK�a�٪��ie�f/yV��nY�r�T�5��{�I��%
ruoo)`��Qy�U�X�ޝ}�5�R��|{�/}������~:_<�d��l�q0G���o_�;v�j�U��gw:k��NI���Vc�a��j���n>�r����S-���&�e�GX�s�,��׶����}I��?ش����*ѷ�۞=ܸ��Χ��n[ׯ�������Y�Jo�E�-����͸��m�'�e*Wy�Y�PR,v���R<��S�B�g�����-?N��Q����/=[��i������m
���C{]���߷r[&�bΈ��uuR�F��6�w�\ool���la���r���%t_�`��wg�Y���_]W��\R����tѬ�Ww]��rs�E�����Jw�ܵ$wEJn�9A/�5�/��޸q��n��7�2WJE��{g�o�٬��2�d�]�:����?+�|�tfiR2�,:��/T�'afy縬���U��������7Ӭ��
��ޙ�������w�lmO���W�gꩯ�T�u�[}�Y�âr景Gj�}���;_M`�7�a;{������1��+R��HHٯ����pK�R�Z��I��V��sSخ���ly�b�9�ڙ!����J�8�<�wh�˒�:�y�2x{?��N���O�X�ཇ��������-h|������������U�e�慫b�L+�Y*���م+̒�Y0Z2��d��flcmZ���(ás�,�@��Rgp��X��	��\��f(^`;u��m\z?�O5���M�Jܰ��f��I��gr��ޙ齻��8��㥙�t�G?�uҫ��\v���c�­�oUo����*˵�`b@��e����ݗ��_�����β�E3g.w8�ɫ�s��%{��l��=��,u�tc�ƙةzD$�;�lhkg(��3�P��~��[�+Y�%zv��do��}`(�����0\���ߴ��y�Лo��&���xx��M珟�pQ܃���TYz�j�kQ��L����3Ks���sqQ7v&x�����O��`!G����S��=ֵ߭v�c�r��j;������!"gC|4tp����(�߰�1��B�
[�"^���:Ew���?[ݗ���+X�d2����=����{�w�ֲZ���i�fE �'�r��`�1���ކ��v�w�W/��.\~Mi��L�BO�Ukd���������k�k�*Eh�ru��,������"�S&p���^yHb��G�ʵ�\5y��N��2��)oa����טLtT��JE��>�o`q�T�PQ��n���9� �(�%E���BӶ���o��|aO.ǉ�O�C�O�}����0���X8e*'��_�R����^Дà�엜,���w�cˌ���<#! As�G�F��"���;��xT�$Z���7|͋ӧR��%���˟٠�����!��Wj�^~�K8�*�f��?[�M��/��:�t���I�NI[���������k>�7/pY<!��p��nw���M�+6lhd(�<u4L��ٿ�:������kwy��o�R�h��%r���v9���po`Xs8���9L^
3�����N�Ir(�jL�k8��ÀS�u�7O����m���΂E9�\Ϭ3�[�Ty�a���y��D$�=�|e����1ﵟ޺y&����[a��!7�����Mdb*lZqqercfQ
�D�s)��l�$��O��v���PŔ_�9mV���9���f�3�O�Z�&#+�����r���^	���hj',�ꗨ���x��e��_�oo?u9\���h����n��$�+6�1�[/�����I�Dy�Ӗ�>����i��O�J�n���Qzk���	�n�m7���0T\I�rk�����`7�;�+�n�c�����LЁ
����Vj�K@�N��z��D�ʉ�j�"�[�w0/�����9����ܜ���Y8N=	r�i�`��g|{WGM���] |�5N�(��M�ϹF{Ue�l�̵{���Ykث�U�l��W�&7���Z��G�w�-^xs���+552�l;�4�	b�1���޳׾�/��������������w�&�]���իJ��UɁ�����v&i��I=T�&a��p2����eֆc�\��06:�����[���O�Y8I]�v� �?���iק��^نZe��R
%S���o��*����U>!�z��˾;�L�H.�u>'s������m�o��5�lR����{�d��#c�����l�e�Kf����|?�����?�������t⋨���^�s֬o_���ǉ��̇y��o���Z��q@ �`Q�[*a2����*�0�Ht��%=^a��L6����C����'C�(�wb{���z<���6��/�_��p��k]D�,����u%hWv����>K�곽'�b�Zx[I�DSءp�
�"�9�Kn��{�\�!�fFq]ѽ��t��L�X����q�����M���M��,-.�aC��oO
Rl�LK�,���!+)�Ү�������Yp��]@vK���ۛ�b�Ʒ�-��s;��m���-w{�����W
|���NbFl������O�eX?ebϱK��>vμ�7�Ȳ7M����88�������s�����l�n�욣}x��=�h���ۓE�lM�bܧ�j|韷nw�����c����=c����?^n0�s����S�O��u�.��MI\,j��Id��ْ
�KEٔ'���J��%7yN�򺕰qc��i>fփo�,\q7�a��M��L���=mU��[Rwf���j��;ꏶh�m��Iӵת]�q����؛�$�m5�'r�ֻejS�N[��>��zХ}�v�[y)���'��ܯՕf
314̳H˙ű옛��V�W�M��Jp��vi����/�N���{]�����a�u8+y�͒Gv�d'Q�3,"E�{rr7G̨	�������yO�����r�-m�EϤv��-�i�wO��׾)�iY�og�4�'~�tuΙ9g7y]:���.jg}���������~��Ŗ%�r�o���I����t�4--;ִgW&�t<�=/�-�t��,�+�	EGK7�u9�[�kJ��hW��-6�{��2O�v�*�ҿ��L�:��K�o�����}S��i��v��s��*���gV��=��]�6����30����6V�k�|��[��d�q�>-�m��:c����׶�
�ں}������욄_�|1ɘ������g�m��xxA�)o�5��6�L��;\��+�U�n�I.�����6�Ny����On�X2�����V��"�~Ǹq	XJ�=�\P�T����g.��N{�ů�Jm	��D��f]��Z)�Z�:Z���\�A��j�K����L��m����1s_qGPԷk�w�S+5�sv?�j���-�̏=-�����!�۞�ϰ��Y�{���������~�Z�i\ٓ��k��wӖ[�N;}��uْ��?��/>w�i����5��>_;z�,�mT��
�{��;K=�l{nI�ˌ�Eg���uQ-:�}�	_�����bgL���& �PS���y;/Z}�ԯ	�r�3�ݯ$���;|�޼
�o����~��3�f�N��A�Q֞1�ψ�N�������2���uA������b]�E��IUi�g^�ky1��R����5�v/�T�yb��sn��l�qw���s��[U�x�w�N�,��o�����u���o�ڷ��z]_W��:/>yN��_��YVj�h3��r���N�β�:�7S�c�Ζ�6=��'����W:_�8��Y)V��ue_f�.��+T-�v�}!���Z�3aI�VA��G�U
Uzo�z��ک�Mѷ���]�al8�Ei#���3��%m�\�(�n��U�v�i��NI��;��㸺���~��;���[����
4n>�j2q�����������|/�z+�ִ�]�N�Zs���9.��V�h��Ӹ�9��C@?��D��霎�׊� ���	���p�����K�������̷mY!�N�[F��yc�}8W�u�+���(�Ƕ�u)'���ڤ�ꯣ���ޓegU=6�^}s���������*�o�GO��}��;�e��i���.�}Dȿ��i�왜v3��4�[��Lz{{�6
�i����NTh9�Ϙe���#`e�C&1.A����l:.��[66sJIk���|�ӛ�	-N���q��.:���)��ѩ�xE��&;ڴ�-�L���̖���}5"�B�'�\���d���}����D��
��[0G$xN�`��,�MU���=.�Z�4/K/hɭn��_U�|��u�9zK4�t�g#��ܥ���^_�ޟ~*����t�y�sMu[tl橆:mܘ�)�i�+*���Z�bk�.�{����d��	
�/z<�_.�ܙ�9��Sw�SKny$�h�u��m-Z���nҩ_N�g=_�kջ�đ�Y�LVޙ�-�ֽ��ʛOW�R/��e�<e��sy6���&�s�I:�4ow�ⶣǓosUU�����w[.sY�R^��hU9���G95�9R�w��b�l�X���o�����1a��E/ͣ�>�JY�f�V�4
	z���-���ҹb-����h~a8�s�%Zd��j@�|�����G�¦�N�;aS�ˤi*��֮U���e~}V�g+&�ەo;�e�9�����bS���i�����|���`��Hē�]�O�<�n�9s�&���U*�B
�MK�t��7fl�z6�$-jՉ�>����z�����?��X^ ��
� �\�
```

---

### `objects/c4/a235cc6d0b04d42f426ab53ab44b088f7f0713`

```
xK��OR0341a�����`��'�0�)LXf>���і$��'��E[3%�Hw<�����r����Qa��106H``pdphb�V�i�rr����B�͗w��qqd`�x�����ǟ�;@A$''''����P����9y�
�10p����G��p��� �,۾�G��A~���0|���kˆ�9G��
���s:�4��s ���>1�a8�v7t��3�������گ�`��~�������<g�)�73m��?oad2;s�8_�����]w�?�еܩ�e����\6���K�z��=E{�T�*����r|�Ki�r�s��_q�����e�`d�Px�i�J�����_�Z���~`�K��&��|:�߿�S~|�8�q�ė%aEy]�j9�$��o`p�(��Z�.��ϓ���n�[di���͝�V(�K���s��i��.��\rۖN��2}��9ߪ����ľ��8�ea������5��{n.�6I}>�o_c���)⢯ؔ�������>���$i��ѱ]�E�����W
p�K��D���Uy��5��P��S<,Ͽl���p��ˮn0X�^��c-�M;�B�'&���uK�r���8Zr�1�TZ6AxC�_L�������H$̭�]6+WŦ������u�x���)?V��w}��@�EGV�FZ��n
}W���eP[�_��%��ܵ���4ꅀɡ�����I���9�冊e]�{)3g�&���g��=k]�8��iۑ^�I҉���"v���1֊����˓{Y�e��z�Lt��)HJ=�s�~m��iw��2$w�E�H�!�q�����=�K��ș�����4�O�����p|-w=je�{ՖwsN�}�Z�%���#�K[���Խ�0�	6s/*���ج7��͗�T���y��3��Hٜ5��t��p���%�^y������uE���U��e+��W�~m�|�S&p���)ˊo���S�v�B�
v�N2���Ȫ�s)��JzG�����T��ݘ���렡�˴(��n�-��42,��?���H��t���\Py��"yC��$��o/�n{+ig�>ġ�Z�������6���^}�<�xΌ����|���\�w��Q~���-�BWxq�l�]n���e��Ƚ���8jĔZ�T�H��j>5S�٭WE���^���E,��`��&}�
�fN��t��~)�����t����`j�u�©��tX�ɽ��}��3L��(��j�nܮ~�0�Eu����oů��qzsA]�:�����/6���y����c�^X1$��p4����ֈ�6���Ԫ��s��fi����j����g�>9�ݑ�.]�s�jѪ
��]�?�����ӮG���ʼw;n*}��mZ���Jc'���
<ZT2Y" #S��~q=�{-Ϣ�^��ؒ���n�n�L���'�������������,�jL����^=�Ϊe�%Z"�f?v�6Z��L\�V(�{�j�?�=����S���})y}5;I���xvo��4+���֦S�\w����U�9��MK�l��dq�����o��jZM^�~��+C�o�"!kB�<�W�q�l���,p���sA���~��p�ʝ[��n-��%�1���ԫI믹�W�6CX7ŗ��j��f+>ص.IcY�\��t4t��e͒�/}����r��O<'w+�t-q6��
>o��Ժ�p�N�l	c�Ң�����Ms}������SrS����tf���I�O������3�2�m�.g7DF���^�pBQ8va̬�4Iϙs\\[����w��W�){@�W�c~���L���s�R��?�{���u����S��ݱM��v���7,��g�����ٺ��c��Y:;O����}�Y��D�����;���� �r.SqGJË��{g����S4�B'd��1��;����v�9���ps�k��{w*>|���4}��%�������[x�n����_/�T��(�����^��	�<r��<'���j���������/�0��������9��:֚�uw�����<5�|������{y��'��ɵ��<h���Z��[�`V&�ߦK�M�ϓo|��Xp���w��YSe$�s�!�@VJh~ʋ{�?�p+XL�=������IB��^�;��
��.�<q������3�����N��������c�E��R�Q��\1�ؕ�%�3�gR��.a����,p�GT#�������y��Mڵ���˖m�T����J��o�����-~N.|th�����}���-܇���T�Lᯰiڥ��x�H{�^�ÑWjl+�O{,�),VqF,l���շ�_�x]śb���o��u�K7�M��j�9�ѭ3�}�Ϋ{߮�������Y�MK��j,��M���G�-��5�ɻ�
�^-h���U>7s&(��Tw}ja�#��s�r��+��ܺI;5(�J��)7�|���֨S�{@ٝ�D@�Ђn�':1+.��-�
�\��TeΕ�
���4����~�Y���u���,W��]��4!rÉ�^���u�A�QP0[��ݶ�k��m��bV��8o�S�� �D\j��C�-��
�u-|B���u�?���q�_]alz���>a��l��"��~'�K�jn�ڱ:Q���2���G�%�
iS�4�r2�m�ܚ�r����\n�:�����nyڽw���������j��I�K&�7��}�����XysW*8)�Z~d��KNg��;RE��l�8�s�̹拍�_\�+Ҭ�m�k�ލ�f������?�ۿ�����r-�p��\|1��̳Bŋ�1����տ��̏L?��ёQ��D�ɟrn��#s�ݭ����5�+E�Mo-��W��j��o��C*r��e�����3{T�������Y���n>���a�����<K�,�W��ЩIx�6-�EƋ!����W�߿l�Pls�gƵۋ�Ǘ�l��T�}��L�##ig�����,�p�3�u[���H�)g�Še�2-Ώ�X'.�W�b�67$��U��s}�V��y�/����Z�Bn��x<�l؋�W.)�.q��v�K��1N���E_�w��M�2�:��an��4�{�Sۊ��b��{�Ң{���*3e��3g^�s���n�Q���G��EG0��\5VҋN��_Vn�eꗛ�g56�P�:�7bC��hM���N83�vU��{�]���+k|��V�I7kO=s�]n'r�'ϳ�<9im'��	�<	����L.���$.�9{�qU���쇏}�32��f9$u��u��JJ�Y��Hc]�"��Wb_m�=���ۧ}��tsک�d��z�w����/�]��:�ѦcK\<y���c츸q��N��>�6Ѿ�w��ޜ<������J=.������p�+W�[��Ϣ���&����65�r`R6<�n���L������u ���pQ�`��v��aA��s-[��I�/�Q�y뎽���A�99��6?ʾ4��_�=5�뎝;t#C�O2����J��������t�a/�s�:w�I��l����f��u�h���p��s��z\G���(�l�19�:?��Z̵�M�4s�6�'|X�&�c��պ���t�d'�<�g�����X6����>|�!	ޣ�s������r�nO+�����=���0�A��Ƀ>̓�~$�yfYG�pkǇG�o�*�8��70�c�����}�J�5��θC����c�In��N}�SxO�����2Wܑ��"�bȴ\i�������P~6A��i7���z���>�sϽ���oxt���\�ߏ���6F
�L�(o��/u.�{�!�t�k�'$��L\-_r$��3�HI��=-J����U�f_���Ԛ� ~�egf�៤�z�u҂	��7r�^vhJ����+���e.r���-�u����;�A���==�b�K��N넖�^�:��L�����[u�U��ckԺN�m>��Mg�ُU���/zl�!mMD�[��A�gߋ��Q������W��]z��,�l�+V/��S7�X��k�ܣ�
���_Jk���w-�M�f̐i�:��y��	+Wt��֒��;���kK����j�^lu��_��vA�^�����Ly]�.�hY�mSSe3+�G�Ư��=�EM�w����b�t��LOo��ɮ��t;n�;����S��y����+;r˟3g��W��}y���ϫ���2�pن����X��[wP�m����'�49�1q�z×E&���m��r���d��j�=���S�*��n��ԩk6��o��h����ɷ�C��}һ�׵�	��m䍕��ݐ/�!Yڻ7��M��y��X�EN���Ks����~cm�ߵs�vܫ?��u���k�v�3�ڱ-{}ǅ����x��?�MӾph]���M�y��ۥK��V�&�Ns�Yum�#U�ēFK#s,޶�j��?%�� ,��ʺ �k�'s�0�����yI��݋/=q@�C��٫�Z��T'�ڏ�g��J��ϙ�9&u����
���t٥�=P/9U4��Gv�-�?���v�KK�TStl�r돺��w]��5Q��vm]i�w����v&Ui��{-~~m�댙=n��6�N�q[��c^����k�V�8	�{m}��lˆs�f����HS�,P�q�
r��j����;9/�߹z�涨�j�_mw���MtI�խ��?ǆ%Dx�7�X�6Gg���+��|=�-f�f���'{o�Ҩ���e~Tp���B��Z'��sD�}c�6�-�P�~���� �������]�%�������2*H��Z����k�E��7���j*�,l�n}�/sۦ73o�k�
-r�2�S�χ�Yf}>{���{n
r����CUnw��.��Lu+�R�z�7b���.�-S;*ޔ�	�xl���"�M�����Mkzs�4�f��vWݚ�e����q����S]���t�H=-o�j�n��\rő�?b��Z��x���%wz.u]:��w�n����N/��~�qev��	����ג|f�����vž�����u�!������������ϯ��
�۟*�?	0l���t�D�1a�Ц�<ggr-ڪ��71���^�Ղ�W��Wv�����yu��"�%��?�zH�������7�Ǽ���Ń�˱���<b�WPbӽ���[�cY�)����u��(^��\���u�^���n�Ԯ�޹& ���h�E�g=h/_u�nq�����z�OH~�3�����׏'O�3�6dZR�b
�
�7Z'���i]9��l�|������}s�dy>��6�*"�՛s�+�$�rhV�蒖�����I{L��Ԑ6s�e=�I�m��Ū<&K,�4U�����9�T��
�}�DU�l��V��Զ�+��g����V�%{4V\�}����:]����;���
��4}����ճ�+w�ԝ�%;��no�ړ�o���T�kM�;��Z�jk�������aX�s����i+�gJi�:���yk��:�7���VRy���k�]mٶ4\�,\��z&�i�'��z��^xK��Wt�]�E`���.1w��46Ճ9�"
N4=�=�NK����;Kէ0�{�9Q�Izc0ۍ%^�˲T?N�ֈi�x���+�J�1����7L떅��:�^�֭���%�qf�0�BKN�]uTd��I�6ݥ� ��R�|�(�s��D�y�DF���}2��(4FLX�1䦖�$���&��.tjW���:�jd��ҍ��L4=�c�q���Ux�E�3�s4&�Z�9`��J㬥�u�m��(�a�2;������3�t��nv["��ȭ)V��Y�&9��ޙ�_f�_�aɚ�\��F��:�Qզ�;�t��c�i?oli�pR��,nV|r�Q�3�@�w�Oׇ~�.����LRZ*��`��:�c�R�z�z�\���n�΍S��8y%L�z��$��d����V-��HK70PTTT�zcW׊+V��?�TWWWǊ���/�XYZZ�Y��a�W�������j�gh`J �����M�C^w�2a`5  lVj
```

---

### `objects/35/87108e798a13b6b989fad7fdf1ba73c2c03329`

```
xK��OR0372`�����`�k0�0�)LY&>���5��9�|��=ݼA���s�GT8٘&�p���9s��<l� O310142�����3�(C¡��M�����;.	�?��)�4@�|<������]��3�}rr[���!a���ǞQƈ��̏��r���0����0�X��r����%��%�N����~a5���=w�R�?-�18=��#�uڷgL
����q���{<N�O��޽o����F��3�����~A�<���ɒ��'+����w�u�߳?�;~��O\MGG���d�m?�n;��������o��q�ý�����Id�m����ƭ�n+o�^r�0:�;�<8e� #k��]a��id�S˱f����������b����7'mrVQJ�3ENE�AAd/W�s���G+�g�Ώ6+<�x�o��E��<����}
K\o��ҵ��ŕ&��g�LE��껓�}�:�tzݶ+5�V������ߓ����bNץ~ێ$��պ\��������VZ�*�<�8����!�ED%,% �ʑ��,<�Bn�R�M�je��^{]��Tz��[���EY���@�нc���t�U�sNm�����e�RO��S�U�����5^DX�tF��˧�c�G/g]�����i�2��.z{�8���r��A��&m���/��޹�OoWgƭ����
��%{����s*KǴh���2���Γ{��iR��y�|f�ޔ�Y-O��gX�L�da�B�{�^�G�&Q.����n�������,��� �k��a�u`(~�"1�U�������a���}:�����)�#B�m����Z��h|e�b5֧w���|�gf����Ih��CV��-��͟����I�w^8�]���T<y��¶�����i��d�7��&U�H�N��[��5
ܻ�,v�=*/���xxc�C�C�9�k���5�I��m���ݘ��#��{q�e���c��E��ڌW�^���_^��	��0�QP�a�l�ct�z~N��M#�!AVf=��a//F����r���\�nb��3��8ޥM��(����+J�5�X��U�ְ��2fꞏ�ܥ~s�߬��V�N��|�K�g�~�+�ZO�5q��:mɔ+�'NV��j��M�46�΄yf����gJ��>su���GB,������ZP��ϭ򁆰�#e�/���4kMa�����t�*��W�=�I~�f�0|�Cf�����<��D�vƄ(f11%)Y	�V�Y�5'�W[�`3���I)�u�Y>��W���K`�S�V����s��#�Kt6�����2�&%�¥{�ϊk1J����D������4	(�~zU������`��}�����^
���t�_��YS�+S�5����݆p�/�km��p�ʞϭ�V̗θ�ޡ������hmSӲEk�W)�2|���l�D��i���.�r��ㅼ��d�g��$����>���ck�u9�۳�#�j��lA�?RZy9D�y
2t,X���kqQ�E]����\b��Y�/�)��8�������o��f���JU�����
��j��f���{��(�)��,o�P�3X�A�/�%��p_n��ǆ	/?0�vhX�{;qq�6�s���� 3���r��pU�YZ��`�20uL��%g���Io�7��]}ș[�t�sE[�p�բ�]�%�IK��R�ꍳD/�}ɦ���f�����a���]��6q�d���g�Mjc�i�&�kT>:�n���UJ.��������}�i�76���#����ɝZ ��~�On
��v��89�D��7F��|INe\�pz/�vi���ZҔ}fl�hc0b�f�m�4h�9p@M,�pE2���Z�/�����o�[���;U��k��#�f4���	�j��/l�_a �t�΢�w��+]2�
GIF��;��K"n��;��v��W�}[�}�����PC���ݚ�֙fh�i�F�\��L��"n����O�ka�wkG�A��W�b���BL��\�Kr�'�3�'��Y�>!w-���9��]r��a�>AaY˒e&�
�ӧ7Mٳ��;�bv�
�G[�=������NavF�I�=�N!W�~˚�P�eh򰐅������N��n����B�^�|�����������8����z���v���h��t�쉌��Ӯ:ܘ`��~15+��s�f𽞡��,�a��d�@�����R��lh�k��`�-�Ԛ�+:q��Dm�P�N��7�TN���b��j���үت�؉lO�3��k�F����{���F�/��h��=����k�u��#��泞[_�����C3������N��3.1�LnЗ�
���TY�aA�����U��bWK��f����WP����K�F�uA�7P��a�vc����/	���ZDT�Ҕ�&h�|�Ԣ�Ø.�����~3�d<�5�2L�O�Tp���J�b`bx�����3�~��Xo;v̻��q��O���~㭢���o�����_M��Q�u]ۀ�c��]3٢�+#6Z�*��*k�-8��0������⁈�k0'��DuoQ6F�f����z�xd������ ��U���k��Tl���cگ�)�:F���h�[~�#�¼t����,�oXh�S��Ud�є��=�����k�����U��W��&��!ϳ��`�@���_�ѯ��(h��
ǅwj,�M
�gs�5WJ��r�QeY���PVn:�$�"� 	�1#�Nd�N�V�pJ�G�iJƹ����ٔ��q�lt=�����]"� �Ǩ�<J?S�mKy;�͋i�2�
a�_��m������k.�~����M����%�"�Z�3X����)�r����W�(��9��j��b��ų&�D>t6�2ApR���Ǻ�$'��b�0�QelcP�;ڰ�{�)v����,�x�4�^u�/7cf��k��'겦��;���Or��6�I�e�E���T�����s�M6��_��ڬ��\��9�,lG6�z�?�d�������������d-�Im�>�Nz���&��<<���V�)-��^�tf�apT��ymQ(�n����S�㱭S|�W|����6�;Q���2>���iZ�ѽ��b<����|~�k_���}U'_��'I�0<�����B����L�hh����=��=x��Y��?�����Z���q�� �����a��wnV�TY����Wge�~�Ww�d룮Un�FjogY,9�������y��7^G~͎,������1��f������:�דu�o�D�&�d��k����N��*��嫗�n�W�6{���}>�ګ�io.>�s�y�w�sk�]�����'�X������M8�5ᜍ���jM�S&�*����ui=7�mGhc���3��"~�ܿR�pP�5�=	�<��ſg���Z���o�E׆#��7����y<߽��Si��#���}0�b��9f�"��ϟV�ulR��.N���⁋�sw�^$w�=����־Yw��n<S�?�ۯ�}����,�d�9���<NT��}�겆5�z����NɈ00�5�z���&Sii %!������=�y0��e�4n~� ����jH��0\�������֝��=Y�`��͇̎��KJL6��t0�-������+|�|�������}�eގc�9����VdY�,�=���N[V��}[�����O��f�v���W�������B����G��Cc^�4�`ң�����E0�ͫl�D1f�)<O[�
U��afz#����.��M~���6E����u����G�&և�<<�$�lUk
��jg>��,�dZ)�.�U2G�`K���ޓ�Dn\{=���������µ��$��,�^��\k��Ł����������f}����έ+^%gu*$34��w���}�>n��S5���<u]�P���/�J�l��\DU�jLa`j���=�MX�$݇q��}�d�x�v�orI7�Z�r�g�=B��ݍl��������:7��&&E!]ł� ��J���}k���+]>s��)��n��v��|bq�s�����o�V/�p2~�Q�;4��/s�,|��e��w��^���6^9V�gk�`zY��]�W�+*��>�<�'bq箪��hF/������W.�޺c�x�V���]u��7����P�^}���a�,�k1WO|����k�Q�a��u�q�/���y�i�߄̂k}rĘ��9����Y��|-��&��eqh��>[�=jkɁ6�5�zo��zy=vxl3�ء(�{)�Մb/U�^��K��iMްA��X��s�S��ASoI]�_7��s����o.0
3��1?���ϭ;k��-�~�7wſ؍o}<��vHH𕯩�vV~q��Ʒ�#1�a
+A��ʓ�ʃ��;��c��hK���|�.�w�D��܎e׊;#vu2v}�$:�{b��~N�{mV���%?�O`O�y�XKrN�ܨ(~�o�vY<R
M?\p��Ïm2E�A��$�+x��}E�m񺼓��7�L�V���a�ں��p�_�K�d�'w�m��q���ȯc�ۂ/�=�۹�G������ǵ�m���[�{�����A�P�1*`�칳{����f�[����k=��ϸ�L��p��٫K*��>�����p���ƥ��Ŷ_ڶ6z���E��d�,ѽ�v�Uw�^2M�X��8���[f�����b�å!�+�v�x�H���ky�餛�n�^����h��d���؋�ܞ�ܰ�ΜUR�����Ys��ɋ�O[a��l�c��s��o�y����ˤR3�����h�0$��=������*7��۷�[$:fY���ݾ7M�����{��Fr'�Eɗ-n���q�a�XPr��y�[�i���3y�;��	��޴sj�K�Ey��Wq��<�����g��L풿�)_Y��R���k�J�������v�������V�<�*�y���V���g�L�3����7�|<��oM�v;i��xI�UN��-�.ڛ�r�B�+zU<wg���<��|[,���b����6������|�)����̒���&�M�}gST�T�߁����ߜWc�������ۘ���4�p؜�x�U�,�𹻟_�9Uz�y�_���OZ���3��E��?���,Y4�殦��e+7��~l�5��e�ܵ�/�-�~�r����g���+>�Y����DYu��{���ݍ���o�R�w=���%�j��V�"Kĵ'-��<p��t�I�)g�t�����=y�=�t{�?��'yIȧ��e���K������,?�j����'GK����\͖��Eت�^\%�3��p�8c)(��Zy���%���N9lT��p��4~&�y7W��_��k����]��Z[�D����)!�jOTL�Dn:�޹x.�"%�5����^���
C��ݔP�[��O�_$F����)�魪u���/���f�����nJW�j\�=�{�S��zÖ�w�\�MWl�{�k����m�OV]�_y��lI�u��:�Ig�k�s���n�����F���>f��
k
��޹zK���i����>����[���ܳ���vmg2y6[(`#�÷.�:��QOL7��W�V���%c)��r�+%�C>w�J{���.2�����nAs
�\Y����r�đ����/��x����z���3e[e�9$�zM�g��
;մZN����i�>Ϥ��j9�Rϲ=��0r���%ѓN7����d��x�L^����3��g_X�������Ye����H��-ύ_r�&����R7Z���bQT�[[D�2N�ܤ��y���,�P���h���`8�sW�Ǿ�@K{碜[��B&"�.��dV5�l]-�i�����ݞ36�-w�;</B��\�z�.���K�&���%W�fR5��R�ٱy��>����զ�[L,������{���=G���-�Q�u����a���O,{�e}=����E]ޑ�b��4y>�U9?a���>�_���TE�(�d�t%cͭn��?�~a��s��Yς-�����δ�.(p��庇ڛC,g�&e��y��3Mg˵�I����t��qZC�h���n]��=?�_���Ź-�?����m�kU����ʌۆ{�\��f�X��Ų�7N�u��5��.�\[<7�o�ɕ$� &��v��bΞs��-Cu|N������2�K,�y��E
��^R�hu��$$����h�����w�,� ��	��V,�\tI�{iF���e��[[U6�	��t0�7�`q�Z���l��ٓ<?���o��=?Me>ߘ�)S[�<犗Rw抋�oC�v?\��)t'?�����і����7
B�&�Z�漯�[����\�������C#hںgL{".g�Y�dv�\��4i9�~q��-//*���{VQI�`cQ�y����8|�P�s�5�ݺ�Ƞ�^s�U켴zyُq��O����jV��Z#��F�S$������V�)����		��:�^��,��l:�:-RKjS�L����B(��ԿS�l���:P����j�gh`J ���V���!�;�3PZl�
```

---

### `objects/61/373eed642359d4b86d22211cb71eba2552d1c0`

```
xK��OR0�07b�����`��5m`8ĳ�T�l�"WR{P�-CζHgS>��3p01htt��,/�Q8_��CDD��s��!V�f֣2̣.'	84�(qNV�i�rr��C#GGSʻߓ��8Ѭx��𡓯���R���}���[�w_�ݓ���*���������1|[���?k����]�kga������3;C3W3�r��vef=���EA�Ԉ�e��Nl
3�)c��2��x�-/�}��҇�G�_W}�.����}���'+Oˤ��^��K�b;{O�@�N������vW�g,�gnb���p����3R��\�=�ۼ�G�Ea{ǭ�k\f�.�y����"�'���'0��p�Y�+�����ˀ�Aq�3�A�![���C���C�a3ff�)�F�<���8���ܯem����e�l��c?�����df�5E˰�V���ŗ\X��<߸а�ӻ�I���f�*v$�}>�yy`�U��v�k��MO�*�	���|�ݥI����bˍ��8�����J�޶�ղ���}��w��I�<Ͻ�/�Ua�a?t�q� S�a��	��ngM=�f,��c��,����$`j��Pp�L�F�����OE0|c�3�b6׳��m/oY��!̸ճvW�Y��bA�ϛ-C��H��|����-�u�sOM�1w�ni��5���&����b�0�a�1����3���/:m��Z�=�s�nb�6�m��[��ES�V���w��ݛO?6~��6����p�n�.���u��Y��x��u���ꉓ�����0H�46-��
����!��u.���.��q�VǍ�~�aw�9�^Z�|]�D.�S����\����w�wE�]���������*ޔ��\�v����[J'�kVyi?�-��}�j���_�_q-p<`b����9g�.��}Q�����+]C�$�l�
Y�l������
�Bvߎ_+����sN��jɬ7x
���,�p���I#��bf�`���
;@�W���������X�~]�f���/�Y����뭟��3����Z{T�=��9�j��g��{���~��{�%V���,�����I;�6��.7s��Ҵ��꯿WM�<�O���b�#�$�/�i^�g�Y�#~I�'�<�M�������W��e�{���k�����;��)�pj�Hִ|q��{͹�76u�kF}6(T��l�d`�}p"���:�ߦ0�����ϗS+f�y;C���ͭu���ŉO<0��
�9[?��`{����ki��4~{�L�R�����|w,-[L�}�S{�|��]l
�}!����ִt6��g|}�O�/.L<�L�m�ŷ�Ì��+7����������ڿ�o������_��2�妷�nKste�V+������B�om�?0z��[���y�4p�/�����po֎�7g����Y���$�őY繐�c9�ϵ��ضJ�>e�f�`�b���X)G>�[�4��37<�ɰZ������G�x��56
N�rWL�p�s�{Sϓ+&�t,h���U;|�P蓕�c��*�I��g/D�b�9�����Z��漮��<��#��ۺg�Y/�{��~mŗW�V�?xPp�\��3/�B��_L�X�������M^�8��ϲg"�|��{�N�*ԓ�OX<���Su�%
�B�B�Sw�-�}ܯPww�[��-Y�e3O>�d-�9Ē�آat���Y�%G����%ٺy���v��+3-wn�u��Y��\����U�/���PS�ΝϹ�=��0��-��gsϒGB3&>��Ů��D�iŋ&�w]�+�{W$�9-� �~Y��{S�2��K�<���r6�L��痱���H�C���>ߛ�/���oV?g�q������>y^�{¾�*l�
�ڞ����<,}��_���6���'�������SP�O�#y�^��?������EfL�̻qݛ�k�f�^x��f�����?����8Vbn�Tgi�$��7�mo�������tu�(%|�����~y�;J5Ϧܝ`�e��j�����t�g���BҔ�W$�*�u�Y��h��<օˎ����t����W�B��CU'|<��	��=�JBo��_��ٛ�3��q��~��T_���fy)-��Ra�O����������g����`ި~����-�V�f+�����%�v]�.��;�~��U�EE��Q������E"�~1�G�Z���`�0��r��<��◧8e��"��q`W�b���d���|�ʕ1M���ʲp���Ģ#��-W6��ew�OϤ�Vx1*
��6���j���Y�w[�	�^D��T9��[�T��W�}�������θT��ʨ�`�����������ٺ`��>i.ך/7Z-RS~R('�[�0�r�L��CBg�J,b�_Suӳ�{!;Z�[g�����s��}��Oצ�&�����{�|��盷��|ܻ'7}w����FW=B/5��E|	�93{���$!�l��$�³_�	Xo������}c�:9e���������		>�;�nX�xYhU�#^;�	��4�D�_0T|�(!�q������R�&�zT�uҗ04:Orp�(��u]r4A*�~W�'B
����2/6�h����������<�rl��ݓ�%oz}l}���|�e~�x�l{_������L�ןp���f��������j�
-�/��?�������7��	��z^���ɴ��d�%NL�V�0�M����-�����#���YˬUX�4�%6��VΑI�����o�\:q�y��7��.�}]/j��槬��Uۂ��6�Q�3�1���$x21j����.Qw]~v�Qv�cǗn�}��W%u���Vf[So����f��^�ab�_g�p����afrӫ�'�}U92Os���(*T�\�{�\�i<~����`ɤ*�
jsV=tf�����A+GS�t�?w��^�˩�R�⛎O���y�|���:�w���7��hs���y����_����+�����@m���{,w�:�����g�����?�5Uo������u�V��ʺ�Oe�=��m(���㒍0��F�_
���8�t���vVA�������<Y5��l�
�Q<Kn&�b�"�dW�ڬ��Z���~�=���;��}�϶������U�V���˷+�������C�uΝ(Z�0������_~�����U�xL<oH�:�r�j��ߡ��S��e�fwe��Rl����V��K��tx��m^hָg,��a1�,Ӄ�.j�?�Ǣu;[�b�״��9��n��USO+�|�Rl���ϵM�>�/z�����'tE7J����m�˧������U��������\���&�5/B4���	�$�����1ǎ���w�V�i��qScT�wU�+����.0����/��!���������,��0k��ƈX�.��m�����*r����x-"��f��0�{��^X�Ǻ�i�^K�Y�[暵t�� _ϋ�o���N^<+����n��ɵ���7�g�ʊ7�emey�i�y���������UXD́�C6����Ƭ���3�6)Tu9$=���µKI�WP��^eHS�;�D� �Q���p���f��gr6�Ӝ�r���U����BOJV�s��5Q�2~n���{�5��|�q��������<' �\�ٽ�����j�%�MnїĝmR�޼H��e_��kBJ/�������ͳ�[�~ܝE��Ƥ�9���Y�.bj�Yu˩!$�����A��9���VlYȕ�ѕ�$��q���$�O\j��ֿ��[��%0�>wgJʒ	�����~}�/�yՙ��=[5�k���:|��ެ3s�2M��y���J��m��0mI9�s1"��J��}�׭�!���U��N\}�Qs����^�u&��G�j�e��DnL��G���ޔ���NG���u�&vg����R�>�������d훟��[�U�8�sU�<����cs#��W<�rN?jc{Y��� ���^c��p��]�Y�J߸�M�v|f�Hlbl���KgMI�=�r�~��k�J��X��tO�ķ�B�%��'�]�E�c���AE�.}�y|iq孅s���yZ���gڛW*���o׹��嗹����e�]����3�V���Ѩ�a���ӬY�����41��~f[Ȃ&���W��n���\E��de� 6��f?GE?��7����a8Tpg�W��G*�_6)&y�-�\��ʖ?����s��Ҟ�?&��w���r,g-��vO܏���`Y����[�*����mf�U�^��Nv�z���z�"�c�.$��X�<��C�F}�{�w,9�vf�y�w��ޙV+V���/�:��9�e��9�����X��gmVЖ��{f�[]�l���t�O�ۆ��-
fm�wtsS�%���W�Z4��q�\t��Թ����d�P0!p��w�Pv�.���6��['�ec8,2�ae�1g%�n����W������ګ�Z۶�-G���1��ޒ̒�v\�rǱ
~�[���o0q��{v��*a��v����Z�O��b�����p�MA��Y�%lN/���?,��yݤ�Ԣ�%������O�����OU�'�Μ7g[*���j<ZS"�Zo~q:l���j���G�;K�zfj�x����u���$Qe!��E�,����S�>�Q�rj��5MIf<�\���Yy��Ζ��_�n���xz{����>�f��zu-�����&���D3NZ�w�n�b-��7o����_%o]]����?��yo�������W_�9����y������+V�b^��7}�!���M@�U}bv�Y��\wd&�0;$��T���h[�ʌ
�ӧ��_8�����a��?k}&O1��zٮ#.�ܒ�&�����a��%T�\)z�����{�G2���v׍[��\������Kʱ3�G�����g����?�����[��>&=tˮ�iW�Ħm\�e�o�Y��_�e���4�/��o�|(`ު�M���1}�����?BC�lGܝ{I�tnW٨�#u��/�P�wY�s�mںz��'��ܠ�{�w�g���󈿗�Ǽ̤�_j7kݸ���K�ҷb7��?:_��uw��n�O�nM�4�������������������ض���R�]�E�>���u��ǭf��j#�/5gܺ1��d��WzLO6ToՋJ�(�u�����s+��f��u
>�;���,u�	qw�]T��:;�NDQxa���ݯ.�T+g(��ʷQ}����K�W�/����lʦ�{Ѽ�snW��]����▯�w���ӿ�Z�w����������7;{�7o�x�H؋YW�N�z�s��*ផ�jj��	14�4�ғi�gg\�%,��z�G��*��}|��d�詾|5]�����ﾐ�O���Vr�����;ϷfW�d)~W�j�&�զ��nV�[]�os��{&���'E�/ήVssڶbI���lN�z����C���^����������ѳ���_/�riJ�k�b�5ݚfg'�L�Th�L�bc�v�ᆆ�ײs�9&��,�iU8?�SY��.�-5m���K.ey�w��j��ܳJe���������zg����}����?��ݺ� �OW1�`Иv��Tf���)V3�vDYN�eͷ��n����
E������;���Z�+k�����U]жy���|/�o�S��rآM�o��}����a��Nz^��,�R���$ $0/�ԡ"S�OI��1);w�����V)�om��{�̧���9�r��-�����/���is��j㭙���]�scU�����R�Vz����cX
r�F�3B3���2���>W�-��D��fe���D����ZU���i��?K���
]y��6ߦ���s*�CʾݭZ�<�[˓�M
�u��<f�t
��s�rIQc� /6�߂�?�7W.�ب~���E&�����ܹ{�?=k��7�����f��j<|����f��ٙL3��6W��0�Ƒ������o�}��oę|��6� �Q��P�s��ؖcUWs�%�ͿƷ�n��F��V&�dUݝo].�lIP��0�
�7���V�����r[�k��	v�E���<嗚�v��S7���f;[���d����*�X`�f�6Q��'����\��TT,��u�XBۺ�Lr�.nʹv*�cW׃M+������43�Z�8HG��Y��+/�i�]^ W;�l�Ϻ� ��S
:��p���U+����Ն��Zq�sɂM+R^7OYqz���;��+,��*3��Y��9�;aG
k\�Պ�xN�kt]��a���䀰���{��K��r������B%�.��Y�Y�ej�v�X�R��L��gs�ms_�Ly���ŘP|$����`�}�����xc�Я�}O�2���~�p�9=8rI��
�~�������Y�ο���%F����Z�9՗�L�TX�m�Z�����6���S�8(�9��iS�3/e*�J��
��4�X�Q_�b��^��	��Z���6�˞�T��H�'���ʬ-A�W�+5����:�ʴ��(j��&ۓn,�ӻ�5]��s���\S���3���j�{��M�R[ӹ���|�`kO�-u<�b��eZ
���T��\䪟q�<��FOG����]���m��dU���_�/+2�N���-[]���'br�M�ov�d�
��5�����U'��f9>��=�t�ԏ<Z�
jÞ��x~hu��[z�ۜ�2yZ�4N��p��_��B߫���LB��\�d�2�H������SG�sb��OZk�_6]hAB��i�{�4Z��rTdz�P�`�DŒ���ejz2�VDW��<�	
�g�-�N��5:���ԣEK�
�Bʹ�h�ո&(�h���ǫCk�L��s��q��C�:�;��HU�C�|��[K>��.T
lW�Ƚ����J,�̟#�wݕ�0�>/����o6M���:��n0�ֲ\�$V�r��y�*��[6W?9&2���o���;>�9R�?�����Gb[���,9Xh0��뷸��&��X�r�g=�/�|�|=b��מ�*$�U0�i�v^�̭����n�{��t�9�ݽ��j�bU�w�����Z�̝�3s��B���hN�Qi��Y��!�k�v�}2��s�|0��Xc�{b��̲�KK<&�o*T�-���֖35n�S*�L�ӹ�f�ڏ��]��˦�7��u�<���Q���	�]�q�W���M�C������ ���e��O�d�_k��}�{N����eK~]N{��韩v�Ϡr�Y��e���Y���9�3�n~�D���߽s_����h^)�W�m�9����z[ΏZ�#����nm����S����<j��XZկ��{�}�-�)>ag��Ϋ�"2�D��<������,K��	�V>��27�ePNP �E��.Y��:�t�\��l�\��?��9��(���$���9Yd��J�KgڒMj���|Z�l�vOA �X��kC�̙�����y2S�b���G&�
u�����,���Ǣ,�Џ����>�ۙ��㓷Roh��,S��k�]}5_��ʋY_݅����2�w������(2X�3i� ���]#����!���r�g./Q��s�T:�M�Gߒ������N�[x���ݠ������!�;��JZ.F�\ݚ>\��%C<�T�"�K[k���%�<�-y�����7,>�V��Sg�mq�u����HHh�q��M�˺�pБ��C�*�������l��:5��g��O��u�E,hl�q�u5�340XE> ������
�!�;�3`:ܹ/�
```

---

### `objects/61/c869036f3ac4a53eaf3d9786652bc661040c60`

```
xK��OR07�0`�����`��[��0�)L[ ڰ�5o�z��og'�06��128h�p155F�	��:�`�������C@�g�Q���j> �B"��L�w'�qla``>|��a~�35�@��~����A��������300��ZT$30����Y$�o�Q�R���.���G9���J�ɥ0.	H-y�|iUf�2cW���q�ւ�/���ȇ�`��y�,�6�Oڗ_KcaP�ZW�e��F>���+얗��|o�{�A��ǉ���G���ޱ��rjw�������"�z���>�����G�SV�lXc��E���E&}m��w�Myѫ=��uQ�,�ǒ�����rp\�[�rJ���#��Z��ղ�n��R��J*&	J6(x�T�q���L�53^��o`(c��twA�U)��)Tb�>)	Ϙzc}�2��/�ܶ�M��[𧻓�Q����H��z��Z'݂�Ճ[�_(�S��>wݚ��E��jk5e�l�e7nG5ypF���-�v�fW�yW^��lo�Jޛ�V�r	�2�`���g).�##�,y��5�B`+���N�c\���r5�^�U�j�a���
��NIj�����r����UC�;E+.�9&��$M�<c��)�e��$�O��9v
q��鱍��)Hs��*��[��N:u��l��ʊ�ޭ��h'��=V��v���i�����\�h��M�݅'����u�Vz���J�<�lK⬦%M�0��ɺ=uE{�]�8��T��R�ꚴ�r]�+"�Y�����ol�.��ܫ��ȫ�W��s8�`��I��e�|�*���s��0�]���T��L�ښ�_~�V:�4�d�15�u[t��.���9.�\�Ү����Gm������r%>���#�;?X�b���W�v{��̐���D�En�O��=8)���Ǥ~���>�^�1;��C�
�'������E��YSf���̯pǲ�\�W�����є�2����
�[�&71��/��"��p��]���^�($�{�x|�w�q�ƹ�':����*<2�u���5ǎnf����������ǿVK��j�]p{l��u��^GY\�+���l��O7㭡U+ϕ��+}��v���k??�y����#��+���s:�l��uE�+g}��_����U�g�]:��=<��Je��.��_��ԣ�O�
���+�&�pcN�&��%t�00��q��%k��ͦ����v�K�`n3��SL�� �q�(!�M�|��U�|c���W;���Z���Ƶ'�ʽ�MgӢ/+������������<n0ͨx§�ז��5�����L����"�Ύ;;����s�������-��6�|u�Zޅ��ĵ"��Ѷ��%Q=C�<F��ZOU�X�e���Y����|���ȝF�
�^&84�,˰b0z�z$/��S��*s\�NL7��	7^�.HK��V�t���M��]��N���rl����T�cK�N��.V'%�;�N��>�JBܻ�ÿ�N���?����ᆽ:�����;q�ػ�vۃ^��+f�Υ_�^��ٵ�R���ۣ��4Ȱ���I��ѡp߳�Gj����,j�"�w��/�7����^Ԟ��~c�z|��aϙ�K�Z>��}Ґ ����y�^?[����Y�%.���_���IE��_���?�w�_��V�S�?���4^�����~��\8���b�-*�w��;�θ�,�2D-c��e��jy��+�GyXM��%u7s��u���}Y��l��ot_z� ���5���E<*����;�'� $�m�p�#��˪�����4�;Y��.��lϛ�i���2�D�^ζ2J;����i�)1��I%,w�d��k��q 4��j���nx)1(T�5�0щp�
�;�w�a�n��'wo-�]�iʴ�˲7˥nۺG��r���ʾ�����¢�3�픨��Z�-J�8|�5�!��B����k&�N�I�h��?�a��>��@�/������l�.����
��.̟�Cy<M��K
I7�~%J����\S6y��:��!uW��,�4�[3�-���;O�:�1����A-��5��'5�C1w�,Nz�)��Ή�>�:��<P�s�"�s/�.�z�L�j�S������_�rf��d���&�Y_���ܘ����/YAW5;��;��;�!�d��~]
��=����}@��>b�����݃��O0��ܙ���w���=��f����++���_6��sO|X�|+��O��
�"�wwa}zo��_Hu��#���k����ǶѤ%�]�fGb�D��n���K~��_�䕗r����m��;���bO�Y�W߯�������J�_ßEΌ�r}�wg��V��)s�5��S-�B;��ers3[=�!�^��%�A����;�k��y���j���_~�wm�`��ݳ�F�e�{-H���l���os�Z>�.�{a��k��eg���l��i�[~
?�u��nK��Zi�\����/�����������Ɲ�.^6uk��k����i�տ���;�8t��z�ʌ��R�Nm�fwړ9�w��ʤ�.��+
�r���0����J�2Msx�;�� r��ڮC�v��9��P���7Gv�=�r���/˅�j�����-��x@���SM�t���������ࠕ�T��?��v��Io��Y�N���&6Q�F�������Y��^�U6�����FC�k�FJd��
��]Wo+�J�r���(����e��}��d���c;�J�n��]��nq���E����	'*���o�&����܌e<a�MsW���˺t4v�m�fq���jMw���X��<6��������ٕkK�g���~���b�u�o�?���}d��v����̏8�vf����$9JDD��)Si��U����MZ�O4K��D���W����6�����n����^.��컓��H���^��w���p���}�+��n�~i/�;w��P�V.m9==��CտXe0\��hU���"ـϫ�vU/ʼ���w_K���5�+~��K�/�x�ߣvE餮	/�	r�1��;*��Åe*�r�E���<#�*Ũ�;��l�K6ݺ��n�|[�5������q��N�Y�����C�'Wi2K/ھ��FS��؍3�W��ϙ���|�#����_��)?������O�����;w�#���ܟ��ƪ��bϝ_��'_�������_?�~&\��ѳbQ�Y�X�������}>N;)R�$��{˽�K7Lܳ[�/��s�c-{7��l3{���W��F��oU�c��o����-ؒ��I{||��
W���z�#R����K
dP�{��;0���eӻ�N����9�'8���Z�OZֱM09���tˆW������]�L_r�Z��kS��=,�"�г�\�|A�y.&R7d���n/���+��Nř+=og�Ycq��ϸ����I.�	i�r��=,e2e3�,�3��E�*C�u99S�#��${R��ɍM�ge�lf!6V6���.5SW���˱͇#��������<(��[墴�͉-)�)O]�$�����s�����A�Z���˞[~��M>̠�,�Ű���sM+�Ȯg,;����[g�~�A�h�Q�^P�C�Y�T-`f8tr'�yF�%
�����%f�4��;h��چ��Ӯ���qwoľwk��VtL���C��/|M����X�,�����rx�-t0�P�0��BDb�׵���^W�:�Fke�Y߬Ƙ%Z	}�.{3��qP��J�'��g�|z'�ё˶�Q}V���^��W�/P0�.\����g���f.!��3�D&�l�LH�|����g�7W��D��<}aq���7+-f:>�ܻ���{�jfkqJ�5,rZ��a�qA�V�ް��������v!�
�q^�������,� �A��o�������|�V��yp��^�9���מ���8�*�o�����Ҙrr_�~';�
e��6�-E��?-�z���^��?Pl�9�o��7_�^�g���OA�o���9"&Q��Ҋ>ǕO�o��ǿ444e�3��	^
:Z��ǘ
NZ�����L���/ЏCw[����~�����e	�ˢ�7����#�q�f�c��b�� p��P��(�������|R696)B��,b�>sc\)���*�ش�e�I���������k��.\q������Y3J[7&De.-�X��9���_^\�r�[Y��	�LdD����*t|�я�������)���^��2�2|�õ������F���E�Oe%/��`���眵��栦p���������'@���P�-��Y��/}M�-�t���NuI�2C�Qb��(��f�E�g&�.]�(y�������=���������<T�X�ҩ�h��+Y�������ivΚĦC��M����1Q��o%�1���� �2-��Y���#����I��Yl]����c3t7%0q6��ՠw������'M�Eoj\�,g���2��'ZA��y�*�����l>q�M����ߓ;^YU���A?�"�w���W݋����e����:,�>|�]m�VuV���c�Ϲ�H|�����}�5������[������ּ6���㒚�r�%tc�	�����
Vx9� �b���W]�^�x]�&�u:����wٮ�<��<y����|�Ku^3#�9@���+����o�5����3.��&N�Q����^˞�����^����=�����_������wyޅG�䜝�n%�#�1��{������_�ײ�n�E��[�bV�iV���y/]j_�g���r.=�f�������d�n��q4�֤n��������''�'U�Mk'_�۲�?wo4�G�s']}�t���	?��;���U�F+��ߝ�V�`�E�gf_^����(��� wQ����̼6��z���r��=��>������5��k�y�=�·��CΪk��Ն*�&2_�7��ݔ�����w��+�"���ެN)���X�.+���Y��czB	��~IS(48Lada�� ⡠)�|PثaChC꛵1�V���x��.Or[��n�`ӋWM� ���fn��5���j�ˤ�<�dth����0c�O��G?��3SW��3�9r7�l��K���]��h���;&��^����g��_��X���g���Ǚ���
��"+�_�����<��OX!���T&1�Vg�쨘��A
��q]��R��wD�x+X�`�5CD����;�!�l/|bP��sj�T��m7��V����r�W�$.�{q3.�V��m�=ĳ���G�g�3p�����o9s��u���r�ݿ�T��k��yY��'4Ny4ˮ���QkԼ�OC�,֍�fj9:��Q}]��b�g�C�K��.�w�W9�L��O�X����|�6m�^���`v�U�7���R��!bM.r�/:g��6?�q5��X/8k�_��؀#n��k;��N�gg��
����>���ʆ�Ќv��R����;'�|,�����=�[�sf�?���d�� ����]��e~\����候���֛����v�煠
K�M���?K�����.)����f��y�&q������X~��2��r�f��T�����2{/�'_j�e�_2�r}xгM�3����:��X�8��N�se�Y���눖>�yds�Y<�E�GkP���r�a8'��-B"��';
\V/ڦ2����a1yך�V'˗�,v9<���;�}�q�'�[��	�WK$6�Km|�Ga���e!w��z��<�����$$�~��d��
���iɚj5ųm�l�Q��\�-�ףf�T�K�BLL;�+Y� a�{�^F�럹'>Mu7��_�!gFG�K�B��^�cӔ�nj�ِ�h�'�����0�0�>v��y߳+om���;�+�@�̬���ΞZXsc1o��1��u��G55o+M{m�k�Ρm��LSl�
��Lϋu12.4	�a�z�ڼ+�����,%����5_D���|h�v���>��~���6��}6��T�u��n
�O�\�xyKd����s��V]1�o�1G�m���o�^θ�t��p��}�B��^����r�[�?F2�|�>���r��
Ͼ-K]����Z�U&���'�9�w�YQ>�D\͙v�u>�o;�U9ʬ��ѥ�2����n���j{�@��ʽw�,^�O:hV��[������Y����0u�R�£���Q�8������gï��y�j�ڒ�cJm���O�_=:�{*���ȝM��!F�#f�4��9t���I�.��2���.�������L1a8�sWg�m�KZ��nNo���luY���9��ꦭoY��%?��c��s�֥��\�x�x�ۗ�&�,:�{}]Q\���y7��|)���R;˥�Hq��;;�?*Z�w8�l�h�y�����|�<t^���ԓ�J[�~7����9~�ƫ��.��U'y��7KS�wܶY�b�s��M�V�UܬTt�
�P��jAP�%i��4��u!�`8�s�2�L��U4�es��%�)��S����*qJ
�yR�"�ec{�F�d!�WRG⼴{ZΕ	�M�T�-ygz�u,��E�����ggU8I���4�j+O��)�k�s��QQ�D�ڳB6�WLx����D�R룞W�j?.����2��޷���-5[�ᒙk���7=�-��앍Ke�%��U�]f��.���db;	��w�g0�
�˖0�M�6��̝я��]���Mӌ4������ۏ���-���\aqt���d_��%�,3���s�R�5�u_��V���j�y�oo�jŭ���}���Y����������0wM>��v�K����!��j;��o3w�:{'/qM�ѯ�WCx�N�y�S��u���"�Ym.���>2%f~DB��#�\l<}���K���R���S>w�O�=.��5>�wJt�ڥ���w>?�L�K}�K���I���W>�n����YA�K6r�oYn�2�5��[���n7����[��EL:{PU5����
ƒ�a��>v3�gn�W�����*�E{/�}S^�`d*6ݥL��-��+3e���_�æŶ����Nq��l�>ۊ��&{�����-��N�2;�����F�å��)�5�����^Y�q"7oVS��)&����jճ/��o������=�M귵��]q�t���W�������,O��,l�f�v�r���J���H
]��͇9�?��<X�'�:���f���2e/m�&:�L5z`�.U��[uOR@���~׻7��E���J��p�f���⤭v��S�O<���g��g����6�TP���z#��[V.�4K*8�rSg��X���R����΅�\=�/p����j��̝����Hf���]�n=}�k�wnؤp���$]O��e;-�e�u*=��vsy��Ǖ5�����mr���&u�Y+&��q�u5�340XE> �������C�1� P_��
```

---

### `objects/36/6a2878aa32c7c04dff1527ab6cb190456ccea6`

```
xK��OR0372`�����`��e��0�)�uX���H"9�H����j�M	3r8�X�ZX�քi�N^��̭������!��3�(��d5O���Qy��#�--
6666�>|�
"���}�'���?`�c|����y��d	����y^Էp���/��Y�{���*��Y�0%���<��r�e�β���v��:�Y �~I�ן|��e��ķ�O��A�Y���<`���|���F�?�|�7)o+�C宐Pv[����t,��_��o��,���<8-�'�9yO��EW)��U��˘C<��I�,��}�'ՖI{��,�&�����I��%B�K��6��8��ӯF透b�+_<w{�/iw�1q���	�%E7M>xaC���IKX���xm>r�����j���US�վ�)�L���w��˘�_�&��?���L)�؜���KW��TXuc����_+��ݻ�7y�N��\q��f����>m��^U��ס���'��뮩<�g$g��#f�Z�T�v�ʈ��n��~>�f����}�mY�e�z��]<���������;9��<žOHx�Lǧ6k�2�LZ�l�w�r��2'��.��/���(�!+��΀	��,k�������Y]M��4<�tj�e��{�|�¡I'NDN��iĥ���Z�3�C��bժ=,�N�Zke�%�ծ��4�JϺ̫�R}�;�Ɨ95��3ʂ&��]|�.~q�PcS�ER}᦮�bv��>��g)�ȴ<bu�U��@��~��BM�W�2μq$���kH���"��%��:Vف�/��Ǫ�!pU�e����,ҌhlM�d����ı;h��ެ��]\n�JNv�L辺���7no���޿{�	��O��ڹ{��Z2wWm��%���c�G��f�&JW��jw�8hjpH��Z��N�ǅ�NY,�i��"��������OM����܏((L3;������/��1y��؞��<
����[�v�ɛ�A��5�*aH����������f�ܲ�ՋC�u��:�x}�>�t�n���&��Ӯܫ�������ݹr���4�]�0﷽�>G���N�Sw���{}R��rω�UE�+W���|i1��-jOg��R.�(��w�w\���cޭ�FG�	���X�u��
,�Re:)�4k��R�ޣݓ�����VA�)���ڲ���bl��3�A��>����ޙ��7�%�~lz=���C'0����p���mG��J�%�f�M[�u�{O�"��M�Y��o�oؽ�����|:1�R��MZ7�nX�.�ฬ�34����g�oՇl���r�뭡������j�����?����a�����oYL׻��DDn�eWX�S���mF��G�&q2�/�8wF�B�"Y��m��j��w��/�s�Wû)w2t��X�)��t����+!�s2�N����"a�^���H�ǷǙ�X���׵��w�_�w���2�S�x��զG^9�3={>�ᰭ��J���r�!)P�dj�zh�֝8i��]����}E����L���6�|�Td串���Tx��������bK�¢bAO�s�ByK[|
�$X�X�������Aܟ����]��M���x�o�6�������wB�x��g�>�q#fM0Ͽ�N���r���N?o|���5�����T��d]����5�:w���|z�:�ȷ�޳�Λ;M��k�.9=�����;�lp���a���R!5[��e��;��<^�m<������}��nZ�\�ۜ�sWq�9����0��8�p����iK)7���ub�_J;�W	ó��Bb��6�Ϗ��h�v��ѵ��_�>�7���j�½��G�����������ׯ���?{���֞�̵js�jf=��V��נ6��7w�nҋ����~t��^�T��26:

�-;~�G����#�\,"�����_\/���og檰S��֥M��vp8K<L�s�t�,�C�H�%�J�����:�l�&�`VS��&ƨ�@�`�����^�5�e9½Z�om���i��덖�̽�.���p�V��7ˌ��;�%o�z�ek���0��۵�疿��~]r�+6<`5�7�TpG��E��L���`��������og��y�x8.z*�b`y��y���]��_P����c�϶�`a��8���rԺ��AF�G,ɽ�#8�~�տjk��4}Aǡ�X7,l�\�AL��
���=/dbJ�'pY������uGV�?��_�k������r1�M�9�����Q�W����������_S?��у�iE��7c%7~��Q�L�r��������]��v��k�����I�w�.��U1_2��r(�Xa�w�&�B��������Y�l �3s�A�Q�|��po��'WB[{�3<^f�; �M���Й��f����)N�\371-2�+r5Q9�۩:���m��7��sGpD�*��ژ�j�i�������T�ԫ,t��������2т������T����W��'O��u�p����'����q�Y����� I��!�:|J,<3W	Ν(�,�/�b�
��|J:��@�7Q�W�p�e���b��g��ƷTz�mI؛p�Ń�%$���iT&{(-��:1��T�����<������믿���_���o�9M��)=�=��v9t8[��Rəi�������n�ލ<zY&���|?����ƚ��@���lF��偓%d4
6�K^v���p᧟�a����,����t�2M�X�!*I�3���E�I`����6��=Ը��haA�)�wa��]�f�I�������Կ��An��JW�\����/�蹼���w��o�𲲩�^�(8�/������:�X���7�!��\�p�%�\����������^r9��Z�&��8�zI�S��#��� Q�3�^o�9�t�>�2��A��4�^.��1�7K��P�O���~�����>�IRK�+`�����kJ>oJ���7r,<�,v��Q�^�W�<e��I���<��zK��{�����Z�"zJN'�t�����m�lP�����v:�o�-�i�K/u���yr�t���_g|ęf83�Y5-�loRK�Ys�N���7�����d�������|4�\�x�q�Qg�hV.H�����'\Z����j��Rn��s�����R��i-�R^��y堣�fa��)����+�-we3W�i�'i�4�4O	��l8m<�m�YF�ߜM��?�ݓu�������MI����-A3&z��X��IZ�˜׻�m������{���*{/�`ͱ03�iE�\OY�9�w�����ߏ�w5h�ZC����YlR&37W������ ��&ϻ����?I�Z˃����k�F+�O��s2�H��)��:I�}����)�B;�*t̼���X��NY%Ϻe띳�DL�������=��ƛ�R�-{���8�q��-�K�f!g,>�����Rc퉳�焵|Q���0"�u�҉A֋�V}>�g�Pnc}��;7������H��-���ME#���,㥭�Yo�$|��ܱӉ,ֶ%���w��%�[lwu.=m]�?�
����s�����x<,d=t��:�7ku��z-����īp�e\A��!n�Í'2Y-4��s�T���Uǽ�s޵ݽ���$�����SWv�/�PY�n,_�z�d��Խ+�˵JUNE��.����u��R|�T�	k�֕F��Lnvxz�]�����ay�FF�L�D6>�S���]��
n��R��O�1Z��׊�Y��C2������y��1�r��� 8��j�0��%S�^�{0Ic���y;ۘJ�%�36y6�Ͻ�������,���,dh�w��u��O�=����i͕ʒ�a�&�5]�br���o������3�W�K��?�陉�
�(�����:������+�&�Ѵ��q�|h�^�>�5�_l�U���{�y�i����#�+�Y�����Y�������y޾��2�T��W�OEE��2aՅ'm~��;|T�U��(dN�l[����M���W
J�^�Zo,n�S�s�d��:���T?���L��(�q�bͬڱ���{%Fzӄχ,��$�I��sAɜ#��&�a�hW��n�-��m.��?c�޳Ĭ�s��^��<[Jn���U��d_W�U3�>���J�,��FC\���Ǽ��W݉�.td��%��7���Ǳ޷|-��������i�U��N�7Y�yW��뙺�Y�Ï7�m�}%wϻ�6}���K���|���!���3��g��G�}���̼�^�����3;�o�y'Rſxy@Zۣ_v)Oas�u��3����1��h���}u�i�m�õn�Nx.��O��w+�Ž�n��3A��)~��P}�.�'��#��^˫N�<x�\�m���܉Þs]�f�f�q���7���[e�5&��Q�xpQ��mZ5z���#g�T�����������cS�������Pӣ�K��|���9����ֲ����Ĥ��_����%�t�J� ��w�����ș[rq��ڕ�~��Gߖ���kE�U����^9�*��!��urae���W ��i�2J`8|i'×I�IN�Կ/���Ta�S���9��=����iڭ�SSb�����e�v��c:{L�IkN�r�О4'�0�ۆrI�[���OM��u#z�ѺF�����n��ǆ+�֒Չ1��ȱ ���
&fW�Y6��[�E�	�ll�Ͻy&�;����u�7��ϗHΔXs��-����>xh��>O��xrc��Y
�� �;�|�a��1#�m��{}o���{g����m�u����y-�Ӷ^ꦫ�v�iǶ���RS]T<s�t<�f\�+ܴ�i�TɍןN��R�:w�����K���=����-ٱ��Ї킔_�ɫ�'o�[YP��$��BW4^�����M>l�x�qå1=��T��p�e���!����������齹g˶�r�����y7���^>3��r<���F�P�P�T��YJA؜����.�5V^�,*�����Õ/7�:�6m���
/�V�
b*Џ���r���r�F���Sb�l0h_�Rر�hm�H�k׽�_>*�ٮ[r��6/Ӊ��^-�u{.�Xh��XVx����N-��N�tdj�k>�c��림�w?����y�;�D�r�eM2]x�<��*77�0T_��{��{�v{���tWW����o=V��\��`2�YO��qh�ѨC.n����ӲC�7:��%Z[�6�̶��#���;�T��-;�]~��&�)���޲��n�7��$��c�ƽj���,�>M͵l���Ά���->T{:��	+�{�?>���:��kV��	���`.��r��IOn�nE����.�vZ��?]���C�].y���E{�����^���+�ʛ��{��Yy�w̶��%�˺��$�{w�&��v��|��~��ƷV˼]c�
���|W:,�d9���d���FMs�1��Ze��j��@�Ny�U�Wu&,<q���\�ʍ���������K�������jQŦ"y�Y�ʼ~�J:"�*'�^N]��jݻ[o��-��Z�pn������(q0l�۹�rb�p��v�B�´w�f���h�z�񯪽��n;zu��Ч�?�?�}Y�5wN�󯺿���oR?ű=gEҾkFK��7��T�4�W��_�f���}�?��2�}K�wڷ�w�Ξ���"����w��<<�9���qѢy�fGN��y�^�d5�fʦ379W���h~���z��jK1'��&���)�-�@�?�~G��)��3팯GJ�S{�����3�,�5�j��f֪�3���	��{����]ym��i��tXKw��uf3��vG�@s��K.�YW?w���|��6�QE6�����כZU��Ԗ��d��h����%F�?�lN���գ諘��7o���������1Z/cG��j��)n��&|q��Y�z�T�Q�U�&�J��G-���"���.żڨ$u�)Oi[���̰�Ij�%/����Eq]_���e[�K��_˞=�;e��[�K�_��l�rʫg��`������̸�����ݬ
A��?�}�hzh��r���sΫ�o��_��ٯ�ډ�,;��uk���Z��ƹ�ckuuuugo�V��䈧P�S�'�{�DU�9�m��"۫�ua����sf)�ښr�W]�_@�-�ϫ�·�V�}�:u=mu��8؋}ݶ�t�x<���_��3g�g��y�LTV�x���'�46�rKK��rI�c��&=�g��u�Tr�������L�Y��2�n��r!(t��O]��?w�LTr�9r���>����z��� ��?���a8�s���%ϥ�-�߇���4��]ɠ Lk
```

---

### `objects/4f/57dbd61527ab98f532d952783467b991d818c1`

```
xK��OR0341a�����`�k8�0�)LY&>���ܶ��2텧�s�p6���1M��ɱa�4�:�Q��6f���H�Ĕ���|�X8�XNN�{3���#�������Ç?���������`�`kQQ��P������3�;*?^k<ǑS��P��a����������P��<
�Jȩ��ڗ^���gٙekg��/�""�p����:�'�H���������~���8���A�}�!϶��������{� �\SQ]lr(��݇1��Y�/*�^�L������X�T�_�{J��]�u���'V��8�.5�{���%xE��E!���2r�>,
Lbɟ�v�;����b��&WN�ܜ�r��v`�m�\=��^�K�U^Ol��p����{-�)� ��>1�a�
���ǅ�B^Z��]o���K[�yV�)휛��S��R�o�
����=�uzp���ܜ遝oi�TI}�52x�_��+�����}�C�mq�S�za��sYu~�^�傜醴fs.%'{�e����KZ*fn���lL-�̺�%sȩ��xԶ��6��/�՚��f�ڪ�7�f�r����'i�!�(
r��N�UC�;6s�L��8�j�2�L�P�ʕ�.we���TLUTn�[�e}[�i�)>zG�����-�q�xͧ���]��$7�{g���S��kM�=�߸��l��M�W��~��;�ܜM��J=�ѩ��y���Q�]���J��)K�=Y/�rM��Г�=�����E6��;�>���ѻ���瞟sur�dRٶ�}�R"��
�!V%����;�K���x�nYV���,Wـ�E����.}f�HP�C��λ�IU�d������]rQ�*��F %*L�gc���BC���ß�}��MI8������k��z�����i�L��cVb~|���dR�F��;�����Z*�8o~5���0Wj��4�^�
��,���)a�pK�'���w���sn&dq1(-�_�`qW�v9)
�<72���I3�k/��r�Y�l`m���u�y��;�l,4��U��-�q��ҰB5��%#7�<�t~[״IiZ�ģ��gm��q����KA���-�g�����e^�R�ꋗ.Z��j��ǌ��S"��8�	�
MJ{���s�T��3�)�)��︫j~��K���}�4��-<O1��Hؖ�聃��,��euW;�0�Y�`!�h(s*%yb�-��GS�r{/�pfhlXp�� X�� ��{���͌D�W�%��v�O����������o�ؓ �$W�Ԅ�B�sO$6i���a�k$� -N�E\���sN֨$����R��u�:�2������`�=�cY�UG�W)g/�O����������R5�ԮXL	�W�0�����=x@��nv�`�/��-m������_%1��P����ᐲ{�v�S�d����|k��fgݫm������m����-�c�U���a�?w]���*h�ڭ'�����[�m�=�U_m��xr����I�^ݪjs?\�Rv5���wb۽�{U;��kfL<�����W�~���~f`��0�;�N�����92[�~ �_N�pPý{�����������Q�L7&��ĕm���/X9����+D8W���9��^^���mϽ��շ������=�����\����y
��g��eN��>����$��v~]��Q��k�x.%�qc�9'�Z�%�Z��j?������M�^2�Ί�w.yiV��d{��K{y�gL��3�x�Y�9x����L�7���^�f�r��N�S�}�=\�z��������\�h`�q0r�2�3bu�G'npp�j�l�gg^n��e��O�|����~���~�����|�枚(�;V0`h�qף�C�rc�ycӍ����e���-|���S�\�Uf���AC�U% |����[�"�?�Q���:��/~l���5t���:�|{��]���T";��*uVSsc���u��Z�]�s�W�%�}֜&�ޚ��|���n"!��4f��3ؐ`�h���/��
���qg��x��������Ɲ
������1�_s�Tv�d< -���EXm�'sГ�H�Δ�n�~
՜[{'�ju��ҽ,i���r;���ݷ�=]����fۮ�v�.ϳ1�m���W�he�\���9�ᵶ�{28��8���/�b$5��όzGu2�1(.H޻p��k	��:���ٖ���E�T��A��kي���[���?�1u裏*�4��.�M�(�K�G'#�׬��Rc�S�I������]S�����W����k�q����g��}]xX���
���Z&k�P�V�Z�"(�TAY�n�k���\�Lf��9��2u�V�/�_|f�0�C���j��z���Xs�GٱG�����������8+��mm�̙��vN�k�����S�γ=NԹq5���Mgg��)�������ϖ���_?����]��l������)�=��C��m�5�����5�|1���}ᘲ�&�چ�]Sc�<>t)�V��Р���WV��fj�ϳ�A�ͦ�?0�*�%�b_�U�u��	_��?X�Y�5�e�ߞ�|�8�h�Í�<�O&:������ȅ"51y_�_�.ŗ�����`b����P���������U�a�+k��;N?8�hR�$��/"���rqQ����]}m7���E��4%�l[�o�-bK�J�yKo휳,�δ���D�\��Ѥ�v)F'��VW�)�LN�{��gɞeTߞ��j)��E��0<���&4Y]D�)�������f����I|��׫ ף,�We�9�����m����7���2$h�vf�ol�/�vGM�����h��)<�X�0��z���pi��/��d�I��V�[6��δ�ji�Dg΄���[�UYg������ �;e��{�+ⷭ(|������C�}�7�Ҭ��V�Jf�[M��jQ�3��w���[�v}Kax������?��V
����"�N���ߢ
S99xY�����:��U�s���{	�-i5kWi$��Ϫ���b��}��M�p����~��'��kz]oJk�^�h�N������ZrU/�gkۻ"!���>e�Y�kϽ{���g/޳�&������_]&�ܽ��SP���}j�ѩ�K��2N����EȐ��	���j�>�0����&���ݔ2ѱy�baC��l� 
aW��[j���X�ϛ\���W�0�]��U���_μ^�4�˶p����.oqJ��w��Ѷ�/D�,�Ȼ��dK�F�� !�_q����?-8]�N�R艩b1[+�st���������#��a�NdC��_�1Q��D䤕_�p7��h������<����E�
{CփܿUe��wASvq.Kh|�(��y�+���m�tO���O++mY��߶`m��-��	����r��hφ��r�c:�$
�Z؝m��}Q���6[g����rXK,�`=�uV�׋5�]]g�����2!a)u��U�L������}}��47�����\�2F��88Ci������d8�^:�kӑ�^S[c'�P��]����Ap�᪺vX�3�=�g��s�����{D�Ͻ����6{���|�y�*M;��giX�����ɦe��'�&�t4l\��T]_\T��aH���ɂ�ܚ��,�0~�5��7������_Z6i^�g�_�\5U9h�;�뫕��.�̌
�<���Pq0aM��C��
!VW7e�g<E��/� (4�pF��]V���$F/ٲmN(�_kO��`x'��Ϧy{�	xN�Q��>"����-���<��-[o��<uf�T1�/^�
����T�_�!�����Wo�m��bM����)�ć�Z����D2uD�[���Y�8�4���ۼ������dςmM�%�C7N�ZW��cG��X(���+����"�$�̶[B�D���k�=K���(;�V��I��x����ZL��0�=�������l@�?�";�K�����|E�Un~��ڎ,[{4�^����ܟ=������j��u��H� ��C3aSw�3���ҟ���Jڽ�u�S�Y1�¬;��e<��Ͱ=s�������Y������yq7��]^���ޏ����x�*����fj10��^����s؃�6�nA!���ګ�f�s��Pl�$��^��hڛo�����63��=���CW�3f�Z:
������y�:56����<{�L��Y�J���׌���?o~���r�9�s����Nn��P�\��ޢ����͎�xZZ����vv����<��*�W�����y�M�6���䔈/���e�p9!����d��:�^=��TOe���$TlR����/��U�w���-�z;�g��|t���ڛ�t�I��pMu�+�<�bkm�{i���������|�Ĥnf�K�鑿����/��c�:�Y����\��*{�yF��-���C^�}}�����Z�Nw|c>���rs럢[1�et˽�Q9�2���8ŝ/Z�Nk;m�s�ȵB?�N���B
;W{>{�%�c2-�d�/���O��a��ܹG~>��	ʳS
��r�K��_
�/���p����{�-�u���8�"3�/][���\]����KZ��,[39��
��R_?yZ����&ރ��_�X�d��Ň�[��i����࣢�I3�vΖY�t�GNܡ�����4���9�����)W
�"}���ɖ%�����iOw��X�q^�C3}�"�ku��X۔P??������>�ݯ��%�p����͛Ά�eo���<y���y��ld��)I�7�q�������4o˟X�ۡ�qj��9	����ㅭ#K�,���'���c-�;^<)z|�1��!M�su_&��t�\*����a�aJm���l\������[3gn.��t]����S����p�5j��p��тO&ZF˯x��}�غ��I����W�A���k"��p����>��X��TY�o9�*;]�1�WdF<�v�Dc��q�k���2g�T��5�=��o��:5)(r�y�Uڴ�K�֮<v�f����Oy�^3�,3�sF��f{]5�k�����ډ7.YDe�D��
lJ�8y�l������_&�Y�y�:2���cﯞ�:�`�f�q�X�T����
�)�܄�o>���a�Ӣ�8���#����]1��p*��I	����f��\{m��K���XU6+K{��.�u¤�*͚�T�����X�����g�p9���:����f��s���l��p�����[�U�iG�t�-���i�uq���O7�(�؝$Z�n4c3�U��B���ާ�n��z�����]3�q���G�S��'����.H��5]�c�A�P�sS��OR�O5Z�6�%P��gZw0���]�+�a��=�NX5k��D7�#|�Y*|�<&�,o�y�%p�S�#WY�M?��S�Ţ�\�.q�H;T�(�3�����_=wߌY8�Һe��.���7mZekb���ǒd��z�-�׮[dv-u�8uQ�s'qN3��7�=�\|e����W=,�,4�eGQ
�KH�x�~�܍�w������,�~~���@�!��ou�(~a��s�I�uʺ%�w����ru��f��+=J/mBW�~)S��nʦۺ�/J�L��p&z�����{W��A��2D�|��r2E�D�1WM�-N(uZʣ\���\��<�y�d�S/��ͺ��%YN\d�o�r,�>u�����9�B|ZtQ�3�P�Jnk�ԥ~��J��}m�|hf�-�UKB=w-�$w�Ti�҂+�C���˟7�>�_N��
y�h���-g6��ߺjՆ&^߈��3O��?)dtw[�IɿO'-WN	����*���и��Y�.�Y�N<�7Wr�T�9����9���]
}��3/l��U�%�Dg�c�x�_����[}����<�b�-G_Wc=C�Ud P���z#y���]2�� o�yF
```

---

### `objects/b8/1275bd706e85c0b2666fd3369e969ab2ca31fd`

```
xK��OR035�`�����`����Sa��`dJ��l�T�����{p�4��gΜ9^L'bc��>�ݻw�n�pqqq00�c��Y����9:e�޽{����Á��Ç��@��>��`����0H���
�{l������������YTq$1tޝ������7�(�K-=6��4���ȟ�x�5GE@�W�_b��8#�aڲ�C�+'N�,�<��e���)�#��:,j�a�H��d�ߖ˳gH��e��>x!����^V��-jƹ&-�+�)�͚;.{�w-���$�ܳ2qN�M�N�W�u����ž���-U�,\�"⥓"1���e��c�}�{���5g'�|������R�&��F>?k�L�&�Ҏ�������������=��m�m��/��"ڟ��a���x�L�D��W)������J��d��u�L���s��ς)�6���k<�:�T���g�.p��e�hhc��|`�����%��^��/y2A}��L1_��˪Ֆ����,	J�~�r��JV��/�RM/8n��Ҵ��qb���)��V�u��������Ȓ�k+��gy�߬��OC��3�<��a.!���&���#r��6ӷ�;̌R
vl��Yb���	ƣ��^���)gq�5�'Q�׵�@|�ī����,xQ���0G8u�F��N�&!9�g'$�M�x�,�[:k�W��v=Af�9
�ע�D8�|6��6�번�J�S��MZ��������ͼ�(n~���뼵�JL����"'֐���l>)�������	��ie�%(0�l�_N�X���ߞ�Vw��^��)�����ɲ�g����[��:�D*A)��®|�)!zB�Y�f���Vu�����^R�⿵2�d�\o�jn����Ig]����c�|+�c�c�6�L��i��%�,�Le84L,_8߹7w������F��{6#��A^��'>&N���o�l��	]�z�f�3�&�y;�ZQs��(�z��c ��뾒��p�Ì}s��I��S0�)���~�iV,�^0�ߟ��zLS?i���'�Ȱ��֢����ʿ�[ȑ��o�Z����v�����7��w��=�W�
�k���f~�������\�y��������&(|zRH�^�|�Ow����sWu�Ӡ}�.����[����у�BLN��/z�T�6+����Ǹ���z�&4.f�l|
r��N���g~{���:p�(+�|d�s�5��;wy٥���E��lX6):� �u��[�=��9bԱxͪ5��R=j�b^ˎ3ߟ�5M��=�[R��Y���wG,葓H		P3��y�"�]L|����{k��C�F+lb"2>>3��{ڽ,���׃��WYJ���dp�}�T�#������<����ͫ<�|����3+�~a�*�)����y�QW��tD�ϲ�FZ*��S��fp��=� ����S�S'�ld�/�L9a�q1+�Ļ[��\�w�?��n�Y�3==��
eMń������������F��d!��}�Lg��_kQ�����_I7�Y~x��!������>�ͼ5�ˢ��k�K�8���pY�~Ӭ�u�����x$!�0��E1-K�GX{�Ph��Tg��uT7��c��뛙'J]Y�����٘����@ò��>���7��=B�N|yg�;�q���WV�'|�[�m������??(ߺ᧷{��_��q��'�"�7�jr^��������#�7��H�e]}wQ�B�"q&�m	˅z2��2��YN�r/F�W�8���Z�E���0/�8��#>q��d�F�xS����ҕrS�X$�XX�@��P7|6��ڌJ�G�^���yu±s�*~F�W��b�?�~��Jv߯[��W��]�l{�����
:����3eAI���-������o�q'�e)uZaW�����2pæ�'��gq�t��1��t�Z�(1��y'ߑ;4Z�^E�p�;6������-,T��:9.tGE���L��)�<m���yg���qݚvm�֩�B �ǩ}|4��\���NV8�)�L~�U�d��店���Λu����u.�Ou2�L�/:���������M��uN��E�ُ��k�ؖ�ќg�v����g

Dۼ��N|��&��u�۹s����޹c�FΝ)Q}n�b5�f^�*7e�ڟ��7��������L��Ϻ��3c�����r$H��z���Y:��<\�m�@�/U=���p�e��ګ2�����_�qw����W�rirl��e�
���7�s�.��x�^�1c��$���)5:��z�9��ҖWx��즶c��x<k4
�N}������u*[�������ncov��w�����>�-�J�H��z�.Z%�&��5����;}���l�p����PP,.r��W��/�ʼi-��Ɩ�Lʗ}��i �O�`V�a�|j�#����뷯^�;{o��K����}��lW���ݬ������Ee��~]�$��:^e.~���n}���ݲ��W��Tݹ��٥�^֏#������_�ܸ!�Ot?�=�=;�K������󗣤�ޥ�ֲ�c�Z}�d7����:,T�����i8vV�[���Bҷ)�+E�J�4�EZ�G4�iOI��/_Q���� �/Vߢ6��J��^/����e]�+����W�ԭWߦ��l\?�������W������5�l޿��}U��O+���uQ��괹��w~�~�V��C��3���&����f������Ҙ�0-a�Ӌ��ʙ��Z}T<�{�j3�����[���ïgm���s��r�Ux���߻��v��_���{���n�?�~�k����5�_����9�w�����?���k�ױ�����������Y�[���}��#�p����R�+�Kt�-�%���̅%�z�����3_ѫ�C�X�W>���yF�Ï�Q]�3mq�}ӱ;��$���w��b��
�+���zH��?�Z�n�F�����hl���Ύ�mR�K��֞ב��ZW���溕�=���4��:�'������aИw'����5�׾�=r�;2�=|������}��w�~4-��Mp˞S�$\%�l�U>�*r��9�
��i��85�F�Ι���ǲ����漭97��t]�َ�=l�K�Nl�:UX(/Ui�ں�=I�r/�\�*|+|�(��۷Q橿�6*��}�zHU���ߔ�O��wE�ͺ���ь��+~/�+���swҔm�| ��ҍ��� w�&�������_���%m�\����<�x��Ԃ�c�j��(z�2G�!SI�쎫ۺ|xNX����gg�Ö��˜��~G\vߪ�<I��峹��g=�%��j�l��/������>7���%b}��֜i�N�uY���s�����{h����w��D�_���;�~����ڿ���M�V��yNv����V������yw,��gw�}m�q��ܭsI�4Zث�+(gJ���Z΋�7��Zu>�_��a��xA��d�2�$���C���	^�R��L��#���s�_�\㠋�H�`��j�˩Q�C7yʶ���	�"f]ӻ1�ח���t7/��u�y(ƣƱ%as��Y��[՛ޏ��\p<~?�9�����������u�^ck���6������g�z,��}�XG+�v�q�VU�o�f��/�vu�e�e�|���B��_06
�캺LMMu��@V������
�	e-G�f=�8gƼ-��>O�9�[��O�����cbv�^�uͪr֣�ů��e�R^>�}�x��E���
��Xlt�mݙ���^���e�u`k�㉟ɓ����E#/���)Kr[/N���}Kt��o�r�AZ#���qW���+����?�3-�7+�;!�tWbT��I��˵#T����W�
�I̘�Ҩ����ߙ��+�V�~��ѱ|u�OȤ���M/�|�8v(i[������VO83�{����m�Ӧ���vz�wu�����u�*х������+�C%�g�ؼ��e^u��4ݷ���_J�|�T�)���!�Z�iz������y�����,.ܸ��+��;	}���#�2�,�{�����8�,���K���D�<���]���N�{���S��v,=v�T�����������3��~���fu��_p�W�����&[W�<�x�rBQ�S�������!�7�!�Ʃ̥R�V�a����-v�����Θ��ޟP����Β%����oo[}Ġ�����^8����� ���ֱ�a�q�XJ�R�[6EKޙ�=�5q�,���{U��Z�E�OIz�����P҇#G���̉���㚤ӒR�
�8�%�\�hm�����aVf�`jGXSٜ��/Ni(%�>�:�+ppⴷ}�
a�N/�ݒ�l��w�Вɂ��>N�Qo�6��=���z�f��Q�;��d�=eOdq�.c�݁����U�˚y�-;����7�*����Ny꯵eIzo��Q�<i�͙E[Uk>O��|YWĒ��B�>�뿽��闿���[�z��w<�?&��o���q��S�o]s��J�����n/I��Ջ���R�\���{�r�,������z�hv�
�I���f^_:k�����O���}b�]��C�����&o޴�����5����H�{�ӫ�q��
!UP�g��(%0����e�|�{�fԝEz�/-|��o��+��9���U�$�'H���=,�Uy�c��̌Eg�4fL�(�'��6�e��kQ��j���9s{Ў�I5]�����7�c�j�O��;z�־�rq��m�ϙG=���vo�ѳ��~��]���
���׷��X���5E,��2���CFS�f=~��W�I�O�O<-��%t.N�
r��ʡ{>�;:y�e�u�ݟ,p�X|9m޽�����9��� ���bc�:4tEھ�]Mk&��8�00PĲ��.�s2-�J�Z��3^�P�-��z�����{�o�?V�?�z���2V*h	m:�0���{�\�L�W�h�-�;�*���_Ν��wN(�7L�D�2S}�Sߴsj/~9�U�)_�����������6��"L@�wR9e��p���
�RK=�?����?�Q"�|�b�u��j6���D�[����$-n}��ןo8�0Yĺh���E�%+��sx�46i�ݍy������[��U�P�㩓V�޹y�a���־ڦv��3��V��7k˞Y_ՙy��T��c{�~y���C�����k�������ݻ�:;3�;�.0?�Ǖ�4Ln��6�<� �l �'�}�%�p��n��d
��f���9�x���K���|�T��sBřg��!��>;6��R����[B����
a�^�g��W|�rl��{�c�Vy��2�M�ɣ�q!���O%.^�x|N��c�y\EtO*b?��)��F����Z�Z��`n�u5��]��Z273	nj��=qi{�����
�?�]Vy4͛�v�陒�z?��jޏD�ݭ�m+wȽd̾c���.�Ĥ���m昧�qc�ȼU�JږW�V��rm��3�#{�.�<e�%O���i��L#g���9&l�o�Q�_-38�����Kx�#�)��昺egY��Ξ��{l���D�so�˹}}s6��e�,�s����Y3����y�g*�N���z��(�����ie���-�6Z�g���a��gm���g�$���u�8��m^�{�䊳������a��y��ó��?��n[,l�E�]l����"�0���^�4�X��* �Z��ڊ��{����[b������������s�=�Id��l�]^V��ۋ�_*�W4~�N9�������o��=ٽ����w1�s~gx���9i�˚4e���^���v-�U��tuֵ��^o��MIl��y����6�N�ܽ�r�c�����������$_ȝl���'�Ӳ7�|��94��Q�i+�����0o���]�f�7Un\~1�zk��\ǒ�i�kw�[ݘ��r�����5j[�n�zH�o�{dR��y�]�<+8u_�����3�MO3��t��o���n����r3�
Sf�o��|�v։=����w��j���O�I�ܿW}����=w}r2>�2�p�պ~�s�aʴΨ�	�~|�C��뎹,�&�s��ܵ�����
��,v<����u�)�K�\�"k��i�D�zN_�.ձ툅�nN��-e<�2�Dk|Vص,x�o8A:/+h�L�=�i7���y�z����e�VF���[��������k/����1��F���QEA��L3��<�ܴ'i���Q���'����=�&Tvɢ �1�-j�n�M^s��yw�i�S�#��i=��$����b�U���)����4\�'�%K�8�go���fgWMar8���Zc������+�%�̗>�+Z��{M���������*J��OԼ7�`8�v�R�@? ����
```

---

### `objects/67/4bf56968e9640fe0eed3d1fba02702c689a62c`

```
xK��OR0�44b�����`���V�`8̳WW)d�-�
9�7��L���3/�7�C�G�GE�y������Ɨ��w�ƛ�S���|}�q�������+�zፓ2�O#G���Ye�u��;��$�_���#��w��{䑞�/�������ӎ����~w����s��\�~��痊����������'�� �{��Ul��2�������y$����*>�
����56M2a8|a�ˤ�h��;
$�<��4+��ou[�X��f�ubf�ڵis:N�I���tdAS�<��m��;_�,����Ş��
66�^�2�ؼ�d���Y.�V���]b��~��z�[*	8�mRa��x������o�p\{���NB)q��Y��i���k</t׎r����a�Q��c/�&8N(���9���F��0���������?����+��dW\��D��eK����FB�Os�\�,���:ޓ�G��i��6Gݗ<���<!�L��V(ȷ��8i�.���w�L+�ϭ�Z�7<	1�|�x��wi��s����΍�y�{#~��8i*��]��
%���g�X�s�r���?��L8&q���_�▭W�� �[�`c�R���A�Ҹ������٬\��X[Z׮�Nb+�\����MCBx���|���o��ͫ�1�Q̪�f������So��W�1?w�)�d~��ȇ��.��8����jΤ)g���l���s���a��q��}�)�s�_!���)a֗N�ۖǏj��bz�����u��s���^�s��#�x��S�f�2���x7�(�Q�3cҲ������u�ᬞ�M�)�C����ۧ��:�gz��Ďb8DVfo��.]�����2����W\��)������.������l�+����
^�8|���A#Xyjz��D�W�Q'm�5���Z��${�;���n�d�	���&hRHؽ}����屨D�;'ꞈ/s�T슅s��D<0؞9%��L�Žo�,8$�/��~i�&��{�f\an�:�0[��!�H�Dʅ;��H�'U7�O�THLI��Q繾6>�	�$6����3�?w�#�O۔�-�&�r�:�8��yxṯ���|�����=�Y�w�c�8qu��������Wl�3盘�x�س����U*�3ﮍ{�����MIS�t�ܝ8Iu��T6�W>wYDC}��z���.g�5�X��5tI50��0��	ߙ��-
N6lڳ��]�E��d��9�ʅm���_�p�(������C�n�����
ضr�-/(q�r��ϯ����?���T����;o��e�?!�x���|�_��?��.Mx�鸕�us��z��M�m6����3^Nx�?,qAd`�O�Vf9�:2;��Js�����:Q���q�YslŢ��,jodA�W֟���p�`/�����R�
La�w"��c���i4��KJ���|��6F�i���Oo�_Yq ѡqվ�u�]�/}Y� ��n�����~�I�.H>��H�b�;���;�ᐿ�"��ޟu���_�ɵ�u�����g���`��a�m����>gr�����?��9s����A	���,�0Q�۴�����lE�B.HNY��
r��6_õ{38wX.Z¸6��Ф�7�U�������ޚ��8}H��R��0ea���F7#��Tؘ�o���]����������
�����rg�j�)[V��kg��G�?�3�}��qo:��XÑ
#,�T��?޽�9U������)ϗOd�<)���[�m��;7���������B��͒m�Z�pkSCy!��r��y���+g�yp(��^mQ���)�Ƭ�S�L�)Lz��?��a��+G����h���z������ɶ?����e�L[ʖj�u��͎>�Qx|�L�nU>���,&
T��-SU��ZRq��I�Z�F!���a�������n�ަ��EKZ�#��u/5ˮ�f3��}8S-�!��N\��q�II	X�
�>�䪁ݯ�6[�������Vq�n�/�����l\$�a��D��?	m���?d���ܚ#�f��5V�9�[�jg��-�mѬY��e����G�N���b����4/F������վ.k�N<��"�w�~�s�}��t�����PI>���.%��<��0����37�a7+ũ���<笮;ndt���ʡ�h��:j�Ci.�s��A�o���e�� +W��U�'β��y�-y���m��q����?㦤L��3���������7r>\����T�}gN�3��<�o��a�W�8*��Ҫ4�!C��u�U�����T�2an����쐛�q���R;�*R��	���;h�)x���眮~�l�:�ަ�yc���y�b�r�KZ�����8�X;����B���#��p�0�b�k����I�RΚy�U�Ҫ�]��
�s��	=	ќd8��Ϧ�3gMO�6�U�-2����s�����LJY�9����缿hj[ԗ}w�ɻ��Չ��z�%Dt�z���Qw���kNu����w����K����P2p
�g��b�A_�QK렀W>B��O�z
JJ��).xv��xE'�,���\�W�=�r�J���-���"�6J̴y�Ǵ>y����>q�)�g#�v(_,l���3'�әD�+�<��<+�?:�í^���*��z)��b"O��v�K����̪j��p��>���+����r��,(0�;`�`�-�ђ4gjc
�Ӧ�׮����V�/�����YK�\NxcC�@�^Gg
{[�n%��;�
�o�� ���F�o�0ܾp7�O�׉�ޟ;v������U�ϥ8�V���������������z믋w
��p���ro��<��T�Р�!f(�a��m�1�H@ڨ���K-��
g��s��&$�`� f���Ơg�Qlu&q�2���峒����
�o��xZ����ʤ��܋~��^{t*꒹3����ȁ�)�����92^�^�����
���wqwbSׄ
d�{|��6N���A�%�Zmf��:���f��R�]G����o[^p�.��sɗ��b�髳��[�v�������X&��^�w���������v�E9vcx�����R����������?�N��}�(O��S꼘]��{�+6��������<�my/����-��'s����8���xf�^��.�Z��_ ��j	o�`�}�ΆK���W�p�8����ƣ�i߿��~�_�~��<�E;,��_n�ڱj��^�,�	k�ˬ�l
RU�
?�v�ۼ�
W��}Q�Qp���s��Y��M�u{���L[��������?3T-���+�<�U+��v��E�o]kh%P��g^%���`Ζ+O�RL�4�u���;sBvK�!C�F��[e�>;:�~u�)L��ܙ�����s�s��խuۦ�����9!�.�N��ș0���g���O�2�i�����q�[_�o�I�k��{�.˛�K�?.[�����������]+���RH��Y~�3���-�5�x���i׮��zM���*Z#��@����6e�9Y�|8��-�]7��"b�e��<-�}�D�^��m�˷f2N�cݾ�Zcԥ���u^�+`x|�NX�JZ�1�L'3���
�S^���7S|�E��P�R���Z�IW��b��7;�PP���|����b*�fv�R=s����%h)�h�D�9�>��GG�̍���:&������깴M�w�:�M��qI�c��ӛxQpB�"�>Ḡ5�3㈗\�uL�Y���-�9K��O_l}��Q���������{5 �[���0<�p���g�M���=:�'�;��8!��UwVٵ	�z^���,_\�.m;u�+_�C�uQ�z���gb��*��Rs��՚%�����麤n��p�F.O����O	>�kd�ݿ�əYe��+�����4yV�J��]�x�׿�8e����%k�f�֎?.��򏍏���9�S9u��|�0e{-��y�ڵ��m_�I���@��W��Swݿ�����\�S'��,c���A��QW_�|�gmB-㶟[s�\�<f��h� �`<�����Mg�jk��3���	I����U{:%u)<��h^$�xy���(��+V[���j5ysy��J+6\ϼ���84�o�]����<Gu&�71��'�^�.+6���>vRg���¾~��t�Ԣ��G9�-�+�r���S�m��B.��'�'ʴyHI���ud��myūi�*!�R��_����k���'3���d��~���k��q0�`+�xk�\͟n���R�M'����\�ic�a�䅏[�T�bNY�����E��I[-cO��"��F�%G�ȿ;{k��}�+��3���t���?����S{rip�i�s�G��مmS���c�������r"��@�Q;�.���;Ӷl��NW������J�c����g�z�/ټݷ�����CV��:�_o�L��Ɗ���9���?�8�k�kS���h����W�=Z^���2ImXt`��L���"���4(��ߣ����Xv��ٛ^O�����w�Is�ȤF�
*½M�W��Z4�]%}���
��i�x�����K���uk��q9���U.}�a������	?��v�������c^��F�;7���[M���߉e�+��ئ6f
���D�O��v�QVG������=O�q�I\i*������!�	v�sM�q|�������~�ʬ��,�3��
s�����*bmyX�Kr�ٲNT���2}q��׽3��W���s�^��֔�7t>����p�Pp�����gĢ�@��R�e��p�Ǝ��寉tL��A��l&�
AW:<�L&$Mw>����}^�;�ێ�����8���-K;�r~��W��ޱ��$��C��Đ�dgZ�mPb��Ys�T����k�o��t�Tq�\!���֕����X4�UPE����dk�ێ7��'
|�����~�v��~�;�x|�@{�CKN#Vn�]�%s�d���ܿN%���S�';/<7M˖'�\��e��WG���Wg%4O�U�k�F�'q���T9'���{�*IlUȢ�1��F=\�4�VXf���W����������YR������U�|�����)ϲ�w�?^;o���o�G��3��ͽ^Վ��{���͒��Z�<~kN��j_��!y9�kz�0�\[ǬC<*��v�Li�����`���ϫy�0���й��&�ηKv�M�	�s�ś6�꿴����:\��x�|��Ė��}ה�4S�����-�B&?����d���D����o���ߞ\z���G��$X�����7�����������W�⅛C�Ԯ^���i�N���gZN�3c{�V�νwB��⠎/m���Ln�^:�C��E��Rο
�|�<��6\|Q�[��z��_��X	0��st��$�k�2��a�3��)�}ֹf�F���l�/���;sm�ԧ��M.�����!ַ��\�I������;��i�CrfOX���?��&)�p_����:M���n*z8S5���i���ߢE�O���;;4"���n�E�_�>u��ys�k�A�S��gr=�¹9k��A��9[�����Y!wW4	���Ib����Z=R{���M���yz��}I?56O�_^�qE{���JQ�ik����N�Z�a�]��_�ln���q�JѼ�t���W��=eq�(�z��Bi5m�<���]<�u�����6�u�nO�xlz�a��x����zm��o�V��z��ӳO��a��nw���@�P�|�(�K
5�&���'L8zJ�cN�p�pe���S�YrsN�}��?���0�n�+WAnm5�w�)�*L4�ۚ�uW�dG�	�����ܙ.)�u}��[�?�y�}��U)�Gf�<yZ���b@�}_����~�;!�
�;\�%{x�]���xy���˴`��\9�N۫�zU]Rpɹ���L�g�����m�ƢB��҉��<�tS�S易��gбLجYz�n�I�K���|rcb�{D���2��?��X� �����'G�r��*8ҵiv�qƖNᯩv�e-e{�*;�Li����(�r�4v�YɾY-�����-(y�m��^���KLe��2�T�7��`�2��Ƭ3�����tʫ���&�㫄]V)�\Z{Κ��ĒP�E�b�w�k������qչ_K�%�&5��|
||�_��[�_+����V?�mFɆ�m��3��q���n���K>w������"ؠq���Ƶ='��=�9��o����I�DWO�w�(�M�����f��v��L��YĢ��ٙG��x��>��Ss�y��ū2'��n.��63�mPDdξy�M�>��{A��݇��\�u��3<�*�D��Zq"��f&�z���e��T��^+�ilڬ�i�����a����й:�O�IeEQt�K���"��?�L��
��H��=E��t�v��r�(Lq��;j��Uk��͙�ذaÆ�[�D���T		�� r�k��[Y\��f�a����g�����Z�������X���KC�m}:+K��u��.�뷚����uu��:�S�/�����X��� � v���;������2���x�I�)C��һ�	2��2,�|�$/T�������۔��5Z7��P�����������K> �s��
```

---

### `objects/84/ee0fbc0badd1a71176ac8847a288f65c048b33`

```
xK��OR055�`�����`�k8Kq0f۫�d6����=�'�-[����?��jq��ђ�TœWr�ݷ���)K.���y~��+�%��"
�ݽ��W�q�+�D���D��dx�80r08�3[�{�HP�V���¢�&�ݻ߽c�pda`{�{������9��������A����/'�xl�r8��x�Ϣ#�+���^��ʤ'�� �i<�3`8}a�d��������[��%��85lx�'�|-�P��JF���%�Z|��n�d�4c�<�H%�G�y|�7>z�پ�&�-bw�<��	�U1{U�i�����to��f����k.2KyP�~�Di���x��]��6ο:����o_�������υ��3������.���+^_X�~y���#�F�T��
��ܯ��u)����Ť;�GO>������1�Y�Ep�i�\��1E��F'�Gǝuw��b׊ݫ�'����i���
��zݪm���HH�Rk8+=z�ŋf�~�mS�b#��ϕ,��{��Z��	J'k�֔��̕}�!\s�~�,�}>>�g�~7�G��﻿~!�Q�"�y�˪<�b��͆ǫ�}my��/T���q�1cÎ��K@�ճ:��P'�c˙'�|�����n���M8�_�9�j�����m�D��\^�q}�GjM&8{W��v���D��}�
��	���JKs�X���3��=���^J�c��Fx��m���>�ns��9z�¡���*�*�t�(����}����c�k��/yo�ܰ�ى����]qT,��ŊG?R���L�P��`��ule� ���fu�0�����먣���\�G5~5-�r\1}�aX�mo��y��9:���.jD=)�����������=�O�{,&���)����)G��|;v��eǎk�{�U�_O��5�|��tt����{8�o�<��Σ_�B��+����z���4���bfe�����D���u��T��iOT��܏�#�����}Lp����~�Uj
���`���d�ՆmQwO��.
�M_���C+��d�<s�ֿ���|��|���)�3j�'�ԝ��zm'�z��+T��q�����k������nZ�Y%�Q�����~��鞵
o͆M��{��_�>^�{�7^��
Y��6?=�m\�t��|�?{�	��*�t�ٳ�ﳕ�̅��S��U^ ��~�n&���%�9@��vka�wn�-Iw��z4T��\3
�{�d��{U���qrc�H-2��m�;s��gi�	��nڮ�zϡ�bk�����3�x�L����p��:��[�4ʗ뛓��c��M�K6\� ����3�ŏ_l��}5ĥx]�'�[�ټ����������?�D���=�_&�ﻭ�q�/������B"�<�m��2��t����B:�v����pPK�9�p�jǝ`�I[h��K�w����TxT$�<y��fN����b�C��ɍ���r1.yV�Yp�h����8��wOڮ��䒻d������.rZ���5/$˯φ��峲�=!++E,\��\��a�J�S�9���~�_7�d�f^���U���*�CG_~��Oi����6�N|�b��~��~���qv�>�����FÏ�z�q{p>ykhV���pw����\7�4��b�p�Jjn���r�-ǚ2K�y�����u���>�=`H��v55/�w�Y�ޔL%�"�㾆L�6��U&���>��0��d��e�W
ύ:�v��_��-S��o�!�����w����;�K���^3Q�[��ƒ�Xg��S�3RA���v�a�ֲg��g_�N�	�؃����\f��|���%~Z��GF����:a"�̕q�������
;3���i����G��6��u�x8�-�-<��<���3�2,�b{�-�J����#t�9@��o�U�V?˿r���V�5uN��Y���.�ffѥ�e��3K"��fZ���9U0c��i�J���� �Kk0ޚ�pnƌ�W�[ȱ���-���p�����G�2��M���d�"�=IE&A!"+A�C�D(�������s���텑�G$�%^�}�q:$U1�qZ���wu?����ݻ_.��m����fg�ʉa�����������arm����-y�s��Bj���΍9�K�se�2��QL�a��`ۤ�����3��~=���&0���"*�P��u�&�Lg���ט��K�h)Px(0�^���3s�E<�[p�̎�}i!��C8w�6�7s�,"i�9�����������yc��d �,�x��齪�����nk��3/�~�J��l)��{>��6��bq�"�{��>FE�Ǳm�;̒%��T<,^8\4��d��顦��4:��ſ��7��^�Z�D}hl�:���]���������_�_��������K���>�Ejʷ	zڴc������p��fhd��נ�����u���~���*�:�rLx��o驨o
�R�+�>r���w��I��'�l>?�I3Ӊ���
�<i��q�����P,\Q)���f�!�a�V�p����l��f��G��fo��
�H��A-�\��ߙ��Wyz�a��&{�l����9l��y��������>v��+�J��׮ӹ��檹{�nV]�56�s��?�wNgN�%���l�(ԡ��r�􈌂��6���(6)�[�r3X*݈�m��BC>Ï��	�n�ί䲹z-��摴��{V���l�w��y�gq��;R�νH8�dxtǂ��;C��A�P�"T�p���W�{K���_�����:G�ڞ\�
\yo��MY�_���Z�vl��ϴ�J��������002�:�;p?L�e3�yb��tq�w��ٯw��9�;�r�_�2e�Iʋ�4�=z|mC���WG�u~�è�k=�O���vs�s�й\�ܓڝ>
��8Wf�����g�_7\�ٻ�����:�$�m������Ŕʾ�#��ݪ�Q1�O�9�b�LCJ�U�������f�N.1N3w�R8��yq޻�o[o�=5���V���P/��̈́Ul\�¿���tQ;Oi��ְ�E?5M��V���u5�Oч��.�x=}���Ϲ�J���{����S7��{�Y�����ג�i_���m���J�Ϩ���g��躼�U�����v����O^�)�b��/�쯅X��U#$A�_���˂1ҀQ$�wD�������c���^�.���C{,�t��㚮�4/�=����?�{>y�ӹ_\m��S��g>�?9&�x�ƝU�׭�����'ޢ{����{x��GW�{4��:������9�'te��N׻���þ͇�m�y]e�?�.���JCƢ��B�Ljk����.=�ǮF�y�j�����Ae�����UA���Zce�8�ä�T�_��l���ľ��Wr{���
��v����㟵Ww�/=��]'�x����㧞�IV�U�X&jz�b�������1���w�l޹A\�x�'E[��Nz}O@8{m��	�+2�u��$}�#�+-<(�,Z�.!�d.[�����)�w����t��������]w�H�z�͵��Wm�����<S��2gْ� �G�9?�a�q���[�i����/OֶN�L|�8weR��[oן\�.�\K��f��1��s^��M�t��Ӵ�����~�3��[��3�M9�[h������.��P�:t��n�O]�o��Um�]�-�вM��$��Ω[����_P���o��UWgy���Rg�i����t�k;o�=�fg�ל��i�-��Ozu���{L*��A�֞�΃�V��U��Ӭ�&���q�oN�&��n���,Ҷ5g]l&ɨy����n~G�����g׋����yfD�Uڮ^���_k��\�u��<b�ԖoE�V}�忤[X�Z�Zx婤K��樶�k_~T��}����_�_�u��qj�:���*Fv��8rV��������Waٻ_Z�ϓ7�����pz꺵?��ss���j:���Z���0�����c�\!��eo����ȩ�Ϩr�W�$�#/�m�u����[}�~庬e�{���>h�e��w������Z��X$>Z��n�c�u\��Y�JC�;1���K&��ZU1cG���ѫ��֦v{�N͞�ҡ"����w��>��sž�O��J�^]��?m��U{����F=�����ܕ��N�Ә�J�~9�ӧ���#,����i.�޺b�pu�ω>�z�O�Nҙ���i���u��Y_g^�4X����ܿ�c�v�?��b���w������,]�����إ���������Kg�}�����j�z|���gK��+��y�?u]V<�5�w澣���|�_�����g��t��M��ԅo��3.��,�7n���b�o��x-|^�X���k2����ֿ$���Y8S�Ӊ2��Ok6L�|M3%�C���O��Wu��5�tl��7��ǅ<�ll�9Q��{��I��T<�7��8�;��.�j��a���Q�9�Nʹ���*nW������H��������Yw~]��߄"�u�������=��Vt��Ñ�|{֭���e�0)!����?3L.��?�����!]�nA��W="��p������wVu��ߩ{O���z�����E��U��ɳT:m�j@R��\��,�
���k��-sq��+��H�8�;�i��K|�f�l[��p%�p6c��ܐE>�1X5K]X{[��i�v�=����l��	�<Ǆ�Lj��JuѴ��Wc�r�̷,y*)���zK�:�|�~��]�⻞�lh5 ��x�J?b`8�v��bDł��A�VO�-�����fv�jЦ�/i�_~ޠ��a��`T��O��Yy�����S���B�ASuc�vU����e/�4������
�5o�%���xx����I^�N�GE���U3ϸ���n�Ŵi��ש�� [��W��{"/V�S5�f�ӽG-)cRwiλ�I��rN�K�X�le-(�3�u�0,����v���{�g~\?l�{��&��]���m֛�G�1R�9��v�ν[�K�޹⌹�����Ɯ�AGgo�^.W�u����,�G��4v�ΰU�������.2��\Y��T+���d� �v����Ykӽ�Z���X5��y�	<���p�X��z��\ۓY�y�l�
��v�ʞݷdZ}��=��a[Q���CO���U��a8�vW#���U�]�4'm8�;�o�tM��qK:ˁ{*�"μ\o�<U�-��׿�Ɇ3�d]�����B��\�<ָ�f+�\�p�|��1�miF��?!�){
�T<'=����ي���F��06�jX�eƫ�?$8_�Z:�kh��տ&�X;5�t�b�ܿ��!j�Jٿ�aR�v�����٘kU|r�i��_Ó_��?[C���!�;9,��|}]��
V
  ���
```

---

### `objects/6f/64e116da6f576730767cadad019f3f0c526d15`

```
xK��OR035�`�����`���^��p��]�΋�{XĻ�9�<b��ZYSd��|MH�u[e�~�Ń�k�.
*�Z/'���j�D�}��ߏھߛ�e������.9��h�]�Y����_�h8z�G��˝�:g�?���=��K)�EN&�z9�@GGӹ�;�ک����W�{��9��������d��&1Y�yS]ɏW�ڎ.QZ|;g��c|,�Ҍ.���U_��0���{�j�rC�d�O�}��?��?�[T���ڳ��>ʷ�ޱ}]ʬimON�ɮl���^�t��
s�W�'�;��4�xih��l�������E6N��x]�Nx��?��'�sꂘk�}�%
��ӪPޚUq���	Y�><��tc�5ك�>_ϲ�g0��#�˖��)u�6S�K�I$�疼��ʪ��
�F̖� ��i[�0��S&r������w�IL���{w}V�[��_J��LK칮��ߚwSo'����2^$R��g�ô�ዤD�s���Z����8!��Y�u�'�ʽ����[$g��O>�~����Ƶ�
����}�_��%��?����֗>�E��}2sk���r�.���v�;7��I��g��[����:^;&��� ��ړ�R�$v�m	�{��E��#�Sd����:y�i���ueۋUew}�����׻}�7�po	����z��-a�N�t�jjD�â���y�j�7n��%��<\��嗶	�KO+ff�n��z.��R�S���2Bi��L�Eۃg����N����ri��f���^�8u[���W�komm-;�}Qzj�Y���;����̼г���V��e���
����P�t֨�*>���e&c���}��v��_�������>�W;��v��B��Zk/9|��Uꈺ��nv�����ꪇ]�9��ŉ�rZ�*.�?:�D��R��ǯ/�\0�*���?�~d���M�o�x�\�t-6>���k
���+7�JG��_g�ux��
����y��������u��s�\��ANR����c���r���ҥ
��7v��h-pR����Lb�$tI�5A����O��9��b�n��?������Y�����Dggo�k)$p���W�椄��=�a�յ�\}�<<#!f�"���5��K����v)-�T���	{S�M�:w�n��O��õ�ߛ.�yo}�qU�Y��s���k]:-H�XB٦'3X-7X%�����^�#�7�YP�e
r��ެS%���8�`|�4��@K�F�_�yOp�00%=�˳1���g���b�I�	�k������9�{բ�E���Rs�֓ENa��Nm�og��gW�_rq��/�-�N��su�Y}�kǪ�GC>������Y�v�봟�F�k_�U%[�+_�v�X��cɻ����[����Hm��J��S�{�|�&v8�V�� ���⺏��0ܗ�1c�ַ�elRph`rȲ.�=��������i��a��p �R�����N�iτ96�L=g|���)w�=�`/V/�,W\����ʽ�
$
bn���}����ӂ�-��M~5�K��ذ����H�]J�O̶kXߓ��f+��}]Jw�������+��������������~Ֆ�����v-�ܴ�AȮ\��,��7H�g��B�Qr5�f)o�!�iaY��;=�M
��'�HX+�� �'�֍D��oQ{Y݅�dz��(�b6�ڷ�Mj�����E��d��}������)�徛����Rl���\#����wO�FϽ�����=3c�C�S�V�9{�gȩ%�g�_���Xø���g>���&?H��pm��֎�BӶ$0����x dw�R�&�	�3A���ҫ`x.7�R���d���)��;�̀�gsW��ihM��#O�Ʃ&ʗ�,l�<�|�u�ϯ7ζ������t�mץ~]��~�IG�=��\���fDu�6�j�~�Y�'m�����Q�b�AI��w�c=����s�&;-��u��^:W����mB<�G�5������թ�:+��__���b�q���'��~	�M�������ó�X�J�<�,�!�@��;c� �7?p\�udT�谩�-��ے�}o���.��//o[������ڮ�[�u�#�o;�1�Z$J��i�cն>p�񁜊�s';'�����L[��<�P�+���n|���'�L��xs��/�����9������_���}i��������8<x�X-hՌ��ŧ0��_D��Xý;��&�0Egd�Rs��3�L�23�^e��5թ����1$��]��ۯ+\�o�yL��i���ꖿ�<����J���F's.X�:A��2��O��M�-�h��t	0U\I�t;�B��ԍ/�ܢ���J?Kv���i�x
��.g�c_�N;� �xp��'����=��zi^U#��-�3/|=��~e��S-�.�5���'���
�%\�h�^�^���� ۸���v��b���?���l��������N��d�T´����! ���+�kn<��b:r&^
��۵
>L�6�\A��
����ă�����/ٝ�Dʹ���>ռ���-
�+.�H��_�����8c@���YEK�:$ݝq���I5v�l�8�S#ɻ�~5��{
fg�I7'ފy{<z���{�������k��=��<S�M���a�� �b�k��nbi��$Q��9iYD˻O�՗Kw�+��������
���?��#/�)J�����^��l������eo�D����s�3����Z�#�S�}Xe�?=;�E�/���"�WU*�b6�&��:5�5Y�<n�N/�{���� ��9��0ܻ��|���������ϓ���Nff���Sy�r���e����5�{�*y���ogn�]����ة�E�����n���e��O��8.�q�s%��;�=��%�}�U�[4O(h>����331��i�d5��rE6&Qf����&x��Y��M���=�7W-��{Ϫ���~�=�;o_]^�c�cuI1��3-ZZ/m��?[]H���޵Y>'/Y�]:5i�U�Ͳ���nK��;3*�x�Թ���޲8w�T�Z����kf<��Z��؉[g�^���8�������p�c�e���d�%�&,�ܬ�-#�.���ɍ���ILKey$���$t�L�˟Vd]+�xwMṫQ;?k����o�������}��Up�:n��*�6�^[�j�y�=G��^��ym|��Q
��F�[f%�.�4%6���&_N����
�������:8��*_�/--�qP�b*z��a�����,�q�ἠ��@HxnB+_Ӭ��+x�Z$�(u3>�x�/#W�6]=-z��ͼc���>�.;o�������U����t]n���-��o�k�?�.t:<k��ɷ=��
�׭������潗^������A����y �OQ����V��_J|��m�-l�.Z�,;s�\��m���D��h�H���4>��CC�
̮��Nf\J��qХ16+E��Ӽ��7��������7=۹�����}��f�O��,FN�{-�</���Ti�+������ʻ�ݏ�~9�����l�u�"d�
�8���{��0+4��A�ǋ�^rcZ������-GV�	y�0<��C���kG�%WR�y�Y�V�p58�(2�v�10gf`etԈ`��X�Ln��`!�b���/�Z}�
�Z�?n���\M��L��}s��z��8���c=�[ΆjZs��.�^��o���'�yݧ��r?�w���&�w/�Z
�����޵U&w����比dLf/���`��j۞��ƈ��s,�d���Mc���a{zx�$��`���`�j(
P�^�&�$i��J@����.���g�U/����[��~E[��sj%_4֖m^�+y�$=��KS/&>�U~9y^�xvU��7�P*�Q���sco�͔�Q.$bx��y�5����{[���z�Il~y�GA9闁��H� �-#�i!U}�LJ���NnWȖ9�(xI�#Y��nEP�_R
a�+���O�ړ�}�ewo����}����
�_ﹷ��ӿ�>�������:E1Y���cg��>p�5�t��X��mnr�������{D>D-���]��3��� �ޒ)��\�+����,�-l�%��آ�>���M칌�L�Iړ6$t_g`Q�a�J��$u��R�W'%��0��������{�9�w��\�K�n��r��[�<�	���=}绥����v��>_�����0�O6�e�u��\�"�і�mx�f㗓+�md*;�oҴ���:~�
e�
^�yx����յk�|[���o^��������ݙ�}-O�K��'���rO���<8K��|ia�UA��U��4��d��������j�"F��٧������(I�=�2eg�u�l�ٛN������[��+�kb;�����6|��~��i��M��e�����u�ui���>g�q�hmM�8ᓚ����^���;ynA�!S֜�[O(��ٳ]*PwGz�^�d�����39o
�Str�Ν�~�;Wo�<����q��$_E��ek�]7{}��sW�zs��M�Y���S����d�m�[�K��R������ab�&��g���
��Z��-�����.0�ڹ{���-Gw�;Ҙu�{��G7��M���k��=Θ�����K*{����r���&��gN�"�_r����ógoU�swm���~�y��o��+Sylf��){�/��s��d���/��K���Ut匚��o���������,&|��������uK�M�<���9�܈��6-g�x�
u��q�g�����[.���n�*
��g�&�F�]���.�����?�_��5B$��=�_-Y�ЗSѽ����d.������2ܴҽ[M+�h��'�)��O�3��d��T+���;C[��#Wc�X�e3.�x�ȵ$����D��K�_�:����mU�zsC�)��NK6���Ld[�c��3�ن�W�*���{�̶7Z�?&�
��|%+wi����A��e�J4~��w}̌۾�_o���>�{�i��趒�+y��79nT�\y�J˰�X�:��&�]�TSJ2X:��d
�)r��kҶ����e���4�-o�+���v�]����������{����ωE'ޜ9f�\�*��:W�x��6��h���K'�X$�4X^�)46"cC[�W�m���[�����uK�Ce�M{�{����E�F���0���ɕ'�"�*�O�k��	����œ��v�z��J{^�]Y:�_4x��t��эJ)��~>ʽsa��GU�7Ej��<�;߈ylҰZ|{^��r!nAu���iBf|�//�TIT�4{���0�k�]Ef\2)��}���47Ｖwn�䪥+�5�,���u��G�
�BGZ|j<\�u�s��HQ��3�-
���������<w;m���^={�T�\��}��u�K�nx+y��]}(�x���K�4v��̬2�-0;.��fd��Ҩ_�{.]9���|־�A'��=�lv&���cѓ�W���n�_��G%�\��n�lf�Ծy�UES����O�ʚIo.J[���?���y�Κ���������������*���M��h)ٞ�F$�6��ϵ[0��eS�F�W;�%�G�r	mVM�S�e�����O
�
�.�ܦ�4���Igʄ�?�W�m���y݊��2'��xl�z���O����u(�.��Șv��DY�iϝ���nv��B�ֽ:(��]/�w���Z�S&���ymk�Rͅ�������ѳ��V�ڨ�u�[�[�m�Xe.��LJ���ה�h�ٓ'��� �������<w�Lv�*xT��0{�/��ϐ�ݺk9U�.��nL��,wM/�䯶�_/��m��w���V��|w;�����L�M��|,-S����3+zo,�K�z��c�ٿ���L�<gmos�c�m3��n�sV�{��F�����������$��k�˽�5��:/^��6��L����f����%+��8��$��ߓ���se����ϵ�X����h~�'׊MGC4��ߒ8�T?�U礡��Ԫ���2,��Vkp�8)�q6��re���AơQ��L�Z[9s�4�i�nY*�Xl5�����3O�z6��N!�V1��
�b���6:�}���Y�b���>s6줐ƞ7M]W�4'��5�{����.>�n�_wYN�ŝ��uf4EiMm_�1'��>`�����{����N���	C���{Q%E3v��/q�;�]�tYd���������C#4eeN6�qqX88��ڴ"!a.O��5/��ߴi���Ao�ި��'m:-�����fj����M'�IM��0pZ�`�����Ą��-Z����j�gh`��l r�M�D��l{�6e�4 M�sM
```

---

### `objects/e6/79022384f02b3f211716fe34952b1f80935995`

```
xK��OR07��`�����`��+����c�8�O����5����ot����V}�l����C5��F)''�9428082	��ͽߔy���;....�j~�NN�i�����{���'���ʫ�=����v����M,M,	�P��X8t@/���&''���������6000���Hh�8k�*c���}5�?7N�ܱ�����t�X%0�^�p�B��!�'�1�w��6�����w�}L�)h$��ʏ�۞��=H�d<�d����D#��\`��HN�ƽ���U'wg�H��8#X���S�w��e�6s`9�"p�tƔ~����;�^Hv���ߩD̈�frK��������{��+�ʹ���ƥ��KJO5�Y���#k���{|=,��1+�P}r��֯O=��+�Z�jl}?笮�V�y<V�_q7^;�&�U�j>7o�9�c絻^|e�|�}����٪���?HL�X���qn~��G'Y����R��wSƛU߽�Z]M���X�����;��f������[9�C��/�2�/���qE5�J����w�����ڰ�{�a��&=f&>}tc�b�L�r�u��"�S���@����5�����l2���v�c<�/ƹ=��{�
�Jif�Z�fT9�ȃpv��/׃<}"
��E�'���iI�`-�ܺ���[vE�����J�~N48qd���%U,�%�;l���[q�,1��7_��,����I떼[�}�d���Kd�V�?��s���A�ֳ:�/v���JZ����K7,�p�6H�y̖`p�����t�HMax|�n^��dK��q���Z�O���L������_�ף�l|���%��W�\��w �Cc��'��{##�V�m\-~=�z:�<�,������=ޱ�D�
K�㢃r�n-�N�/�t\x�®����[������^���{/>]�|kyX�����������"������H�ʒ������&3���1���}j_zr��
K�e��/������^؎T�-eg�.�l����b�����/�q���T������˖��lݭ��m.�T4KYo������|�2�����u� 7Sږ���7�Gv���7�����u~q'�f��li5k���[���{x�u������VɊ�+v�>�{{i���Na�g�W�鼘x��c���'�*��^��q��QQ�߿�8[3(E�2��/���/��ݭ�-�6���Uϩ;�p��A���:M���;��Rr�I�d��9o�=�Yi2g�f˝L�R3��tw����\�LG�)].,=���L�$K]Y����h[�J��dvK�#����:���v
�z\
�u3>���װ�n�<V�	2+��h�\|��AHDu�����X�|��u���V�$#���7%vP �_XM�,�1&��HL�Déݶ�s������"*6���B�/K��up��p��+ǔ����:'.4��xIK�(g�|�e	5�[6\�Rs�[�������E��QQo^M���~��ڙU�Ay��Ԝ�~綼��������S��U�`�(Ac/�&Ɩ3,nq��<chxؘ( Qv�!VTx��JN�Ć@�'^�a�_�@�+�q���B��&':y&��N`}T�% $�j �)gG���x�p󓴎DQSW?�>ϐ}���}�a;m�AT��CO_~�F	g�c��N
Y��>��]~�:�tn���B�ͥr&���J����{��զ���m}U�v����h�W���'�J��n�W����d�R�kJE�S��K�4}_��l��R���k��?�os��_^���
��
��wg��Xs�S���޴���~w�� �~�j����a�8�(&�U�lpՈ\��ө���W�O�%��LZ��hh�����Z�?����r~S2��fW��֊I�W.���������1O�>�y���
�����t=�S����^Y�������9�{ӣ�5���?�����,.�jb����ճY����^?w��Z����"�J�f0��`��6&��܃SW]f�r�������}�4<����9ۥk�KݬI��V�흗�.�*�ٵ-+��F=�-Ͽ8�b[����ksE�m��:�Otaa���u�߿�����_a��˥_�fǦm,��|Y�`A�+���0/
^�����!k��3g�o�2V1�aY���qG�Բ�lq�3�L{��4��SF��T���4�U0\c��N�0��u2U�k�e���jj�Pڢ��Qs���3�Vawvz����H��lc����M��bt�i���i�������g��.�1C�|GЩ|� m������@���v�=;~���n�2N�(����
&��	���$$
"r��ؽ̀���X�5��{C�w�Y��{��q�\MU�?�5s��(��6�w�*���9ҹrV��LB\7Ͼt����	I��~QnY�!j��<���������������������y�Ù���V�Je_��o�[��lҗ�)��J�,�<��H��N�e.��-3J({��y��>�A�w���G���&���E��X���*���!r��ce�f��8u����ؤ����5�؋�g�������S
�3�/K�#�-|���i�f�|x���c�U���/?~}����M�:�־�>��^r�1�Ѯ'6�������LA��M�2۶�?7\U��ܴ���K��4d~9�`�^q��Yx�0�TޜеR0��a�Z��(m�^���v=��]��>�T"7�������,ɚ	�i,�W�i;c�� ���[Їm �'�5��_��P�WJ}Y����˯js]Y>MZ����sv��m��y��ѹ����W��3�|��+��X/�w�����m�F)���<�ϒ����ETR�_��y#v^��[.�~ڪ\��֣��4�Y����z3��58D��e#ܣ��	Zk��d�Y��'���{P��j��t�+�������i�:G6��|���g��_�A�V��V�pObFj�����}r�����,|�?��s)A����O�̭tm��P���C������mf���ϔ��&lAO������7^��ޮQ�{۳��!y�[�6Go��k�uYfeu������6�Y�7ߢ*<jڽ��3$/.���E��2��q���yES�dl����]����˻�&���t��T����NJXm��u�>�=�ψ{��?S�ٯ��ߞ/���?��f��O~�G�U^���9KE{��lhq��bj'��q�.&ӢO�c�F����q*-�Q�ԗ����b�)%��Z�g�,>�a)ƨ�o���o^��M�
��.)�x<������n���+c������J<�����r�P����e���
�{�����O���|LS�S͓�m��3$>�.td;�3��	��ܢ����1ʂQZB�$Ѡ���aa���J5e��Mq�}�k��Y��6�����қw\+Xps�aU.�ӛ%���W'��͊6T��o����QQ�3勞|��k0��߭?�d��^�pB���J���~�'��ڝ������#��O?�_�R.���*�]Dj�N��;��������.�l����>�_�{�U�y���y���vϽ�O���s�b�`�?���=5p��s��|^/��h�ح�q��CkyY�̚�S�k�{�����}��_]v���T�7�R���;�5}��qkѧ?�\�1ڶTP�����@�s���խ�?�6�q����n=��L�I|sa�AU�03�)M�~��:8����������]k��iI�s��]�?���
�J;_ܱ����%����?,8T�4u#��).V5�3+��>�N�~�|n��{�~�N�\ՙ^�谯섒�=&ه��v\H�'�x��`�S��;��_�,�Z�/|-���/����
��E�/�a� ��)>�|'[t������/�����l��6Ǵ�U��KySu�����ݫ��QM��)�#�\r�'���Ɗ�RR�����L������;�� �# ������`<��J���������۝�Rz]����wI/�~��	�{��i�ɐC��O�/���jc�,P��$�/�-�g���I�h���js��$�����}�_��I��Z5W��~|;�Om���ߎ���sO>�����#�Ƈ�
��m��3��@��7�������5��������)��Z��G^����t��������zVp�R8��'�����XMa����?7?�������+�o}uc��vU��Ee��M�MOV��>˼c�� 녿�B�^�*j��jm�XU+�ųj�Ƴ�~J?����R�6�H����rw߄�q�ٺ�H�ɵOqWZ�n�pM�_~�����?yX����������쯕�������]��篩}\�u��$�R�{���gc�t͍u&�9�55u��[�A�wS]q�T��_��^|a*�?�G�D�����!��}<r�>w������;]��D��3��R�#~�x�׽oz|s6ޘusN�iz�6i�{6����������Z���<��g���?����|�y��YZZu������U��Ly�Q�ywѵ�q���ƈ���:�#��k>�
JO��DB���	t��h�e�	^��nKS�z�ܟ��Gi
G��:�#�z��x����:�|���C��w����X�����w�lݩ�{��e|�������}J~����������u|ķc{��~��^�����K��i���I��~>��,}N�ю��
�|����Ob�b���u)ݮo®�2���b�*-�6Q�̭^N�b����ݯ#�T>�7;���W��޾�r���)qw��4�m|h^�[1�u���JMUf����k��r�{�	���zt��}�v�ҥg$��eG�����n͆Sk���e;�;���X�b�a�e�J��o�k�&�M\�����|=�'�3�d\�6I/����Y<�?vj,���(o�]�ϘuE����G��όڰ"�`u̯��������d��	LtkZ;{o�m����v�F��?O�D��! �+�G�=�Mw-�9�\p��WGO����>���Ń�S�n��v����6/���$%�-�/s������W��^}�n��c�[�Fז����I�fگ���'�*����uR%R��;ϭ˄�e^��N�v=�)����vJy��Ó���>{<�;~t���'�_W=�����v:��.����L�Jo8O�=��ķg�֧_yo�ܿAM��c����?��E8�m����u��M'|f{�D�����}J'W�B"r	���H|���ݛ�[�'�$��_8�������)������<S�
8Hދy��^�ӟ�ⶮY��#�C��;gUZ<{'�d<\�l�������j�s�s��rl<m/�&I(�4h2�Tc�g��}ny{��{�O=��vg�kە}�buEs���ʽ�ʁq��춚��l����N����*��zI����ke;����r��_۶���s������3�V-�m�>4���S	'�����r����j�����qn-|�sZ�s~�r�y�V��u7l}��`G�yI�C�SN��Δ�r��b{U��1�6n8��ȵ�⶟oe*�M`���0��WYpՋ$'��u'$�������V��0Ψ`X�xH��a�~��!=ɨr�U.ˎŷ�T�E�+.;�#��z���ιA|�����Y~�q���ʩ�l�U����li��03�ks����Y����v{�{��u~�����f��ݞ9�}�q�3B{k�Uޏ�d�ta��k3���m_uh}�^/ىS��+��j�W��t^�
��9RYdӬW'I]� ikr���,�ƛ	�l7}�,~���6a��u�M�F�֮.��k��p�cYh�����پiٷ��l9z<2����z�u���vY�_]�v���e���Ϝ����Ç�!�:_uԸ�&��������2��D�NZ�Vw��>T��
��|}B�ߔ-�^���\��l��3�����p��޳|�מ���8%6�/��-�o�k��f�A�S�f�p�c:�$��������������ljWҘ��.Tf�
��I�x��N��I]������;��׼Z]�y�F��Ӆ��g��T�v�mgn,g�ѫN%銱S.jJ�Yv�u���){'t�('�X���uڹ/�}����O�p��;~�����zߋ՗k�Y��������m�
}�5z|)�����G�����~{��i��z˼�+��;���k���)��%������>~��g�d�����n�~on[?�N~5��ŉ+z:�&�z[����"䔁 ��_����,��lm��w��*f/
	p��)�Z�tl	����neY<s��+;�U��h�ņ��_}�9�ƶ�h��+�/��۵xz��I/�b7���=�b��C;�*L�6��c_�O���W��&�p��]g�˝	�d�4�%رDI��2�ի�<�x�I�ί�*�B�����Z��޽�s��a�gU��Vr�a�5�����K6m�.Z��d����>����1颐�V�DW��)�Ow/~�L�\*��"�s�e�m���~����S�׿��R��̌�9��Zu�Y�L^���6���q����O##���zT�GN��h��C���������Zg��3���'����_;_2�K�X/�/}�q�ݜ��7�Ѿ�j���u��s�N���0Ǩ�Y-3uZ�	)���>�].�R9�wۮ�ɟ�����l�r����]-{
�Τi�����*:�6���sΞ��r��]��#q�a[�D��^�:Yq��<�P��9k���8;Y����u����
�>;��4Xx�NK����^��3O=���ɞ�lz�����f����6ҰJ+*�<�t�Ao��I���'�蝷��o��g�l܌�*����JŻ�͵*l-���P�R�R"h�%���<��d0�Gfv��/��;�:⾨sƙ>R���$�e{�-�0�ZV�&���mk��XV�s�Qb��Y�u�5��Nl���0��Q��h�β��"��7����O���k%mA�߬�"��aa��~�O�#�N90Kf��G��e���U]n;m�*��b���{�]0��R躳�b���Y��v��੻9�/;�^v��l��͏�mB?/�X{�Ӟ���r]�wg|_�����;���T�YYYw&�z������=\�{Mf��U�lˏ&��*oy=�{��F7�����k�N����m�}Q��MV�V�X&j r�Y��@�'`f���9�h�K����e��=��=����_Y�@m��	�^�叭
���
3jk���p�'k��3���z?� ���~I�Wu���Zu���:W�̮,.a=�/��K���;���q�u5�340� ���T�y�
�Cnw)0g�� %F�
```

---

### `objects/e2/7a5594f4826a0917ab892c0265e12b49480184`

```
xK��OR0366c�����`��i��`�r۩�zf��ǁ[6m���-��S�6e+s����uq1#����+S�-��-�s^Ϲ�n�ء�Eq�
ew�w2�9Y��=<ptw�E[����w�b�~��T���]�����£��+0�IIy��G�v04000+���`p���_ �{�������W����'��c�/���7�7���/�M!�G�]���R���t��%u��G�������	-�cZ�Uj��]����6z���c��Pi�H6�`k|O�@[k.W��k��]�<�֫
������ccɛ�W���G�Ɨ��S,���{�%������_u��Ln���������B��A!o����1���h0,n��Y�<�������A��əq���)ӑ�h��\� �[�h?�`�,p�A��/�̆z���MC.ܝpSK�n���B^��+���<|�c�ճ��uw���%�pI|{�sS*���ۻ3N�q�ϟ���1�$k�����D`]l��EŞ�F��9��wߍ}}��qU����޿ߺj_��}Z�E�eu���?����r�́W�\	�?.=#��eV�C�h���O�����m���Ͻ�w��?���r����o%����Y����7��LU��<mj��՚�2mv�e_I-��T�!�@Av���m|�2}S[�B�7����Y�F��L��Z}�5g�]�i�Gy��|%��t����I��c�����M�=�ϾI�|W�m�c]���o�?O癝��>����Y������Ϯ��'�~��N�Z������������������ݫ����C�Tk�9����x��0߸���ȉ-5kg�WX�\yYb����Ń1�!ڒ�񀶱��*�C;�&2ry?/��ӭ.��/�e�g$:l|r�����?�{��M6���{��������!��wsf�X`�lλ�,
6i��+������sf���v��<N���Ǧ9�f�ͺ�Y�'�/(�1C⪵[K-R�蜖}}9�����?������O��et���`��t�߬k��O��no�1�dЩ3�#�gV��0oyW豫�����cq�T�IK>�,T�(褠e���r�����KNtΗ:�2H��3����X����]����*�����:��l�M�9�˹bt��2Mm��m��K�K.e�?+|�S_�w���qQg�Z�d��U�����l�w��kӖ
'��W/(< (���--����ڗ~M`�'�����GK����I�B���⨶����ϣ�tz����&ΤI~�O5�9����IO�m���tN�pua�TeN�x�Í��N��o���gז)�n�^�.�<}��7��A��/��6y����������b�W^,��NVN��}��_3����{��i�V�,��"�r������c�٘N�t�X��l��~m��g^wZ�,ww��>���o�[�}�Ƭ>��6s��3˔�)/Z9/���0�����72%Z�Z�����=s/�R�OiON+����2��˼z�?��>��?2�:zI�g�N�	�W�K׎q���\@��W�x�����E��~��niN\7%�}ܾ)e�B���:taŇ�G.��2���!��sՁgV�'����.;6i�ܯ��;���Ȟ;F��1�|O������a���{�
�8���1��̌ɑ�	�b��9�h�/��sR[N|Z+��A{�}�ȝWyo���%�&��۹%]j��Ai�c���g��μ��3~Y���ɫ ����ԧ�"��W�mUiO�3ʡS:e�O$߽�+w�ڝ��ԆGeޭ�SE��<슜8��4�C��T���_N�ڮ��Y��f�(4x��@ٴɩuZ�Nc��G�?�9�0%�cZ�Z�pj���b�rv��ٻ_3���{���O,&2�n�4��z��!��'�-�w�<�2���FŎ-�b.
'\�3"����O��m�.)�z��e;O��|�#R�4i�I]&�9�����>H��Z��f�	�T��qsn�Z���	r��Z�Z
�}��̇[[�O�9��Z�k*�;-�~`K���b��(� !�����@k@ۙ���-�fM��{����)�Mc�)����w�ꜿ�ϷW=��9��v'�o�#�[�g���[��^'�;�7yID�C�M��9'��.��;Q��`ꉪ�\MA�wllT)�frn^pY�ƙ]��nq�̒�%9��ܯ�v���={��PT�]R����a'��s��$��Ɵ["�b����}WV�eʷ�s������s��ݶ[�9�[w��
<�y+g1'�:.��� M.e��=rr}�l��}搽�į_�޺�T�ӫ�OW�<�*�y��[�,�����d�B����C-��Dا�<u�����<bN�)�K���7�-9��~���?��2���vJ���܌����>�W�l����֧��o'�K<�oJ��Y{<W�v9���[&��.��_�&��3f3����k�v���ظ�῕���W?�}�ו����>�.��t��w[�&
�9MM�'q�S��,f�l2C߰�𲚅�gԘ\�yEy�4NH�0J(�9{J۴���&�\��4#Db���)L��3�xl/��t�`�
���Փ��K̸'��mmGvv���\Q�5i6|I�:Ub��v��)�]|�{����E����3��}����{�߳X��K�]����[�|��R�X1s�q�EKלI�� �T�Y񪴌��6E�b�3$%�+�q�J�8+����{��#��Bn.5r��袛F�"��)���Bs�V�9<uK�-�,�Oux�O	Y���_��$��p�ƌ�GiW����uӸ|d���/�)s�����������ab�|�����R�?6��\X��W��U��$F�%�>.j���`Rs��4�;lr,�<
{�gL
<tx�����&��C�U/8$�;3w�)��o�"�j,�i�nyZQ�F��|��[��Z�a�pX)Q|]�z����]�^U��M���
2^v��.�E|
�n�h<��伛���}���b����-���}��Z�յ��<of�[u0�k�i��SZ�M��8J.�5��9�x��$�W	'��z�5�솏�{q�V.[P��U�ǖ�y���=���y���{J�{��i��l{�w������R�a�U�'�((q6�xz��Ф��"�|���}��6��E���<�����5
rv ��S�-��p�oo��L��ܑgL�^=����P9M��R�^���^�o���5��"2Z=�>����� ���ŕ)F")N�Z,��M:}��o����I�V�V�������w>����:O����l��	wE�\QY�z��F��͎
1.���[u���[Ӯ,���������������_���[���YkV��a��@h����7�/6j`�׷Wn���x�R7gSG�5�V��4�KM?p0�l��ADJʍ�l"���96��>�F�n����/�O�����n���S�.��;{�T~�q�H�W*��~L�ڸ�C�2�,����3׺�J�������i*+N����ٗ���܌�=>������(�	6��uv6�Qc��s�`�K�px�i���ӕ�ZN�m^ �S�mU�p�����ގ�Y�x\��P��Y%������u��;UKW]��pm��wӳ��m_���<|ó���O�����r���5�K�N���vm������w�o�H	�9���������\�z����W��WV�9��aÑ��~P�2Q�KO�d�	+��[
O/6�]�Ƹ@�`�����h�n�]����s>���zg��75��
�M�#'&����KA��(�0��*�a�'�f�ڈ���;?�M������>�\���K��$�v~�֜#��;oW<_S�6��o����EɁ1*i�w�O�8|x�l\W�a��6�����@�(+}[�������\�62����{O�Jι�hrr�����_>��� ����GD�Ǔ�+d��X�X��$v5ۜݡ r�s���{}wd3^ҙĪ���@4���4+�D�SˢVOlm�pc�.�%o����t�]q)�w��3��K�U�7�^����A�ᦖ�[v��]�s�]��ᥒ�Փ�?��(�|���f�LN���e�fM���6k���7�dg�/�9$�j�w����*Fu��j�����6��ߚ���nɹ�%���^��KC���Sp�{A�ѵ�{;*/-
~�������]�ȼ�m��ϕ��(ߺ����ܲ��g}�v���Kr>&5Iju�-^�Y(p2�ɽ�㤑�[e�gk�t�&����}D�q�������V���cm���Y׷Nr�-�4e�����-_���~�˥sk�-[d�ɵ̟�^%�,��Nm�����}�)}�� ,hu�K�wL���u�U�&O����:���~]�`�&�CO�׍�e�]O_�Y͓?�ܿ��7v��x,���g̏Ȩ)�<|��+&Lb�t���kӛ�/=�&�x��;-T��Եu73��;��~��g>���?�|��F�տ3��M�7=�Yz-V��w����r�}���r��K�1`QNK����	��=�\o��W�^h��ʉG��.��}K�$�^����=�����wz�^0�ء�.޹����E��R�f�J��!0�ۊ�����6��ұ��mN�x�3,���Vm��S��v�6����u�>o�;�5>�ľ����8��f��'�d��b�X{�������gJ��w-#��<����=���5�LIo��qrO�ۇ�\���l뽲�M����-C�S�N]����R؉��v1�C�>��X/r�Su!%��3g��<���γ��or�[Z�R+�a�ɗ7b2���w�P���%3�lmhzb��Sk]�������V;2��K������'M.�d0����}��V'�n��j%�WfNI���nSB��K|��w�?ˍ,�vV�z���Y�m1e]���[\��\�v��3ۂ�E����Ƿ���D�!� �f���n�7�2}=Rm5�L7����PFH��𙻪!A[�O���<��n[�?�^>����\<������y/�^y�̊e�����>�[D�����4^��Rje�)R6����9�L=n��<����]����U�������s����Ҝy�W�����.d����u_��ϻ��}]�;�b����ouv�+$\����B�MI����
Ϙdҿ$?T�1������ ��Ժ#��p��e�E����Kf�<Y,�uG��<m��'���O'�$ί}ݫ��f��Rv��oP��ε{�?�嶨
]6%�9�7�Z^%���{ogs�G�=���3$�Pb��!�ͺW�V�۴&i�SI_�[�R�z���Li��Ƭ�ˤ��[M�"��u����ܳ�|}�\9�s���jN�IOm.��&Rm�9cA�P���f!G�����A���KAw:��R_�f�M�	;�^�cr��2{��+�׎��������GRnRʮ���ܮm�snbH�.�Y�n��wI�[��o�@��O�+��޻�F�����sU>tW�:]�KT�8ZxB\�DG֯/e����=Y4yR���[{U�5�K��XŲb��]B��mg��,�p�����U��Z���M�otf��ϵS0��TI0�U0:tɹ�<��
<�|�7�R��Ė�u�Rυ�f�ꆯ<�W��#.6�z���P?��^N�[��	���N���t�y�A����I
�̛8w��M7�Y�0�U���9��<�t�ݥ͉��jܹ�Z�aB�?�)��;1���-�.�*zoo�Ԯ�Y��Xz+�
+)�x&�h��8�%��+�I���r���ot��~a��s��G5#�I��?k�$��$������>�w劭B�슿nl�xx@a��=����*��}�s��T�����u���J%�.�����n.^���Rohv����/��
�yjr:4����c+�n��)T���7T�a���+���M<��4�{�^JUX�g�w����\U&�N�궸ܭ���q���Z���C���S6Ǫ&uk|�|姳�L��t
�i������mjb�Pptf�V��I A+o���u��91��~H�v�i�M��ӌ�Npljc�px����#`�x�kժ�>����z�����k�H|a�l�K�Y� �D��
```

---

### `objects/90/88775e301d6abe51c3001c34137d0a216744df`

```
xK��OR0�07b�����`�����`�l�������ӝ�+���G޸�����5�ef
�z��f����،��n�Mo{Χ/�Q7������q=gslm:�8Y��7`�(0/�������{Gy����Ev���M�..~�wHH�wqQaPYW=����w�|Z~�N����V�De����B{T4�
�y�9�tz����K�I����z����2�E �˫��f�p����W�ms��e:��$��mѠ$�_:���F�EU��;~}�����6G��c��U�ޠ����"nօIO]ʍ�_��}O���:MI�9��oh��Y\iTY*普6i�]���ZY}�U��䘱�^y�ү�S��$�f�uOg?�x�s�+��+��z��X�+4��t����&�~��Y7��>9�\�U�9�����L�*���Ɲ�gk�/lq,��z�x���Ƌ��X7H?�y��<��̦I����ڙM�a9�}_�����*;��JU��Qј�[甶��)�$���7:Ei����/n�������Na����b:k�6N6���p��=�W����?�s.hJ��gs�������[g����J���t����Y����:���?���������,/�(�r����ܗ�zeϽ����Nn@����+��w[�zZ�"��F��N{w��UD�y��(�4i�\��Aއ>�\��j�B�ɮ��מ=ɽ��?���>,5V|(���hv�aÂ@�V�w
�{��W������̩��B�������f/[�o7������h�ߍ�-�uu�o�����ن��wy���2��|�u����������~�'LK�/�1���q�Ó�b��p٬����q�#�tդ�8�� ��U7�[�WV^�^Vzh����+2�����>F�G*|>���g�UΒ�g�J̻��`�iEp�Z͜��b�.�r�W�XV��$�ō�1'f6ܜ�:�K���(��j��3�����C^�?m��=T�P됥j�ä3��Z**O�.R���d���� �KkU_�a�|�οx�#����N�v>��mչB�f���3���:�c.����N���8�x��Ȋ�g����&�`���Ͻ/~��Ð;�w%�'w)�x�`*ᡨu����KWۇ��Tj�g�cFJ3{�V�_�����6+^����;�|θ+Aa#�b�՗�e#W�z�ܐ�Z�1[U��陜��B��G�D�ej��>r��^��w|w�C\T0:m]�T�����P�<�A`U�?_g�Ԙo,'�}59=�j��U2��l�q3�x맕�=�.=����4��c�y�Yʚ�s;];_T��X2g�!ÉR]~��������Q�����d�������v��./^��m���1Mͧ�[)BFL��_�	����pu<���,��xJ�%qᱢ ��k�]�_V��_û�;�l%\�y�^��Z��.��qq�M�_�"6�2��;��b^�̾����1����T>�h[��>�}	����'U�<k���Ξ�yw����u_w]�ܰ]g�wB���ݖ�%5��z����������B���&.t�
r
r~>�����׾<���_���f����o!q���
L�,j{y8�{
"tL��%"@����U�����
���a.h����yb~�&��:Nv��{no�]�b�Hrઊ3W���V�~��z��4m��!�Փ�y���Q�m醿��t㶷��G�6�9G�m��M	7'n�bUly*�f��d������U<uJ�7��7>�
�۸��/ݫ{m������m������Z�����pL����ё7�������6��axr���F䌫E�݇���O��g�q1�;ݰ��)���&{�˦�3��.��u1ݴv��b�Ċn�+q�&��\$=����ܹ�g��4�55���K�*Ɋ5�}��9O�w�|3˚pz�J���]�~--�<|/�A�j�|@&Ǜ*��swf�����	dȱ�/�6_��ʅ�<Y�T��I���zڿ*���s@兑�ǡܘ=�o#+�}��o�R�o�j����4Iu.<�ߐ�u�STS��;sbʽM/l�Y���,R.za�~0P"��qN�N{�o����������R"Z�,O������W������}�,]�0Vβz����/py��)�k67��6�ij���W�:Xm���8f�x$�%�u��@M�[�E)��S/ꅬY�?p���ɥ���A�Rw�d��xyPYK%ӡ��glv���*�*���}n<^�J���.My�����r�i��?o�.�^{U沯�����᫨�����K��{r�s��]��M�Uo%�W���/���Nen:��b˼S����r�bu�����F��9X�h��/���lno���/��'�v%�3N1�u��þS��8]߁�O���k
O��9|�kcK���\��Z'U.�J|W�������gL��f5��7������ז���V�G�V�p2H���c��}��,�r
^n<s���ك	�kW>o�h\`�@��L!ŋ����8˔�z<p��Q�����x�e�����J���:'���\*��ԼL
�9��k�S���Q#���s�Z�	���ǪP�
~\����B��P�9.�}+I���U[~�������ɾ������d^���7?�l��;&�+��L��,��\� 3K��[�,5�9x�p-vќ9#')��G!뿋
J��dU.�:n�\XU��W)����z`�\�0GV[��m�{U�^�X�\�QT��T�H񵗫N$�Ji=��08tF�၌
SG�؜�k�����s��������������[��U
Ó�����߶E7��3Z��[ΝH��9�u������Ԣ����ؕ����޼�co[0��g��NW�,y���as̪t߹�/ݼ���}�k��ū�����ث��V��)U�O'�\3͵~��'�x�p��ʙ�#�7]Ԙ�2]����]o���^�Z]�����B���!ҋ�od�%|���
�83?w����U
ߕ0<��klb�|�f��N����g�=V=����㐰� ���Ͻ���ӷX�P�-]Q���E\�8�O����B]Y�����r3�9 �۵X��3�i���˿�0�������oѩ��שּׂ��������������ݥ�Ӿr&��M��C3b��xxvyu�tb��.�����%o0��`�q��e����������r���e<c��#�<������
���:�x�0-h�k��,t��8�"6�,<���g�z�mȟPx֣{��[}��>�v_����ƹ�����:�d=ĥ��_������FS���2�8W�*A�6J�>�ܼ�}��&�lp8)�pF�������y�a�����w+10��p0<<��p��#��R��o������Nb�O��na���?݂��:m�̺��d||��ա(������UW�fM�;[d�{�O���������������w�7��,M��p�����ps���)��_���3Z�X�����>�g�rHL>9�#\��OIL�QC�/o�<��_�?���̙&
	[N�s��6q�Z���ai��b��"c�`�Q>���2K`x�w��?�áÃ�]%XIV�F��S���7�ǅ>/&�X:7�U:,��T7���ˣ�@���E��S��﵊kV���}���5������~�������eb"C�N(<�z�ɹK��-��58F^����L��sRN�<�yΣ7=�+
�O8��xd��\���tu���%��eMm(P6z������`��O�˜5A�f��Zó�;��%d�N�������y�[6��j��#���ʻ����М��0�`���9'[Y
�\��|@AI��q����N�W������%z�-���]�;/:��	���:v־���]?��X��=������j�����/,b[95,�{J����y*}��T�>d�[��3�5�K	������r��H9V8š�倓r���5,�_}^2]h�F������i-,K1r�q(yö�r��B��1�l�?�m�in�Y����74Wڥkhw�>w��~��[��s��p��֞y�D?��I�jx|F���qo�b${B�,'�.sgK1���8s7�\��+������_/��J�ӣ�uY0�̇4K���M�gK<�<����Z���0<c��p��	o4�x*m=�3��h�F���Ka�B�!�iѧʟ���u�y���V3??�
�ztq�[��.,�JI��'�ؗ8�v�n˞}I�s�?��
f{�[���]�>��g�`fbw~�fQ��®�^z�^�$�����/���Z������JA�{.��F�|q[|�#qg��]����xK�/U\u�ؙ���*�� ��Ӓa�`��uWd��9=��J��c�n����&���c�M��8���4�g1�{g�ӕ��*�-"��'�ys���fl$g$�g���WX[����?�d��4g�Y�a���m��n:�'�߲KJ'Q.�u���1�7Fp\�zZ��#��9��6�� ���A�ρ�"����e/�(�e�W��{�3�BC�������q[>�����7S
��+;��Z�����ᗵ�i���+�f�
[еr�����R�G�R�]~���.,���oI['���͑"�)Q��'꽢�A�?�uVش��3'���
�rs�rţ�]�*I5�]NI�n�x�(��:|8Y�y�ܸ�5j<�]E�3(�1�{�-�1�A��m�|�o�?;f��������c��]��Ts�f���	;@�������֩�s=EVX�,j��kB������R�kϹʚ��=((|v�hmm��3[.f��o9jU�����}��&��y<�������!E3u#?���;�TqĲ�m��I�����2��9�k%+_(u�lz3�w��*�,�'�\JҦUnb1՝�5��
ճ}h��*kW��w6oߺ�GG���z��y�5�����������n���H�0<�v�܁"��Ce�Il�S_��^���1����~�s5��oǶ�\xX�Cǌ����>ߺ�����[���/��S?�8h��z(�����#	
������u}����=~�~FE�"=��i��,��>����hJ�\j�*_��wYf���%'�����qba�5p��ӛ]���'������Y?�[�ǧ��7�[�n_������C��Ԣ�ߴ�h�x������D�2Q&��,W[]�|3l��*���}�b��M�֒�:��{n������'�zo۝��p@��="$�őw��+��T��r���G?Y�)�-��~�O�X�
/�Cw��Y=��&�&�(���\�vr�>>n֖C}��Xt���x6WI?�k˭Y�ssn��y��3��j��2n�����FMd�J�F�)j՚	]�B+<yn�|�۠=#:�q���¯��kZ&�n��h���l�@OծY���YoR�L�[m���ü�������v�G���u�,߭<�=��7���g�������eW��0�?����F�vzto�D/G_Wc=C�U�V�Rd�ha����C�ަ�="A��֌�l������r���M+C�A��a�ɇ�򵻋
���o;|�֬m������L6��^Z#���������E�oh�y�����i����D=�o7�\�9�w���H�@�Ý˿[���x���?�q��*"�)Izʵ���C�l�$����re��q
ܜl�A�DN9b�m�c-+J�,���<�iݽ��L�3߭����Z/P�ֹk!B��@�jY ��k;����ߚ�x�n�gEF-G'��Sg~���9[g}��Y�W�<y�S+��{�p�����L�7~���X?Sb�:�׷��?�Z�5���|��z��V��U���5�s�5pǥ�٬�?���7�wnϽ{��mq��N>}<��*���ʿ���U��-�7ׯE2��ҎÛ�%�<fOݰ�k�_۞.	���ͻ�o���B���q�2`8}ogJ��+�˅&yN2R^sb��g��N&�)�36}��q�)C}Y��:�3��
}�tw&W�ѵ-���g]�]�4�ˬө9�W�.�<7jfƺٗ�g�')N�nӓ>d�;��*�~���ǵ�W�l��o\�{���s�W��t@۵U͘9���S�ej�u�Y�:}��?ֲ�|�v��{�/��]�m��o{�� ���Ծ�H�������&��{����0i���;_&mt�~g�q��K+�,.����r�rTgߍ��|w�_�Ӎr8�7����w�ږ�ϵ<��|ۥ�Y����n��}V9��.���_����߿���ܜ}R������V�?)ߢ=UKH>cs��+��BvğJ���L��K����˸Tjz����$����,.}�q�8kZ]�x$(����H�0\�kT��J䁭���i��N�0�����g��*͊Ԯy+����%ϫ##��?K����x%�j]��F�[�~���r�K��nܾ�;�Bs�3N�i��&o�w�}^�3)8t�ʽ����r��v�*۷(��[n-ٙ�w��5�7�y������K�B���5�d��Z#ɟC��|3�Z�U�]Үt�T�a�k{�$�)� ���|�%�p������VD,�����+�s�sal�O�Iɢ�uo�g�vF��m����E�WMn�vz�v����)������hKٖ����M��5����eW\���Rɺ�d9��2{դ�1�.-v=�,ͻ`�Ʌ��k]��t�y�U`�Uۓ��'��D�R3G�)��n)�<.��/�&*f,��y�3�F��v���Tk���������Z�m���٫w�Qi�a�%�[��B}�;�!�ڔ�7U@��E�$Q�㊄Y�3��C����6��3f2��0wd�?h5����ͳ�@Êrq�4�M�9�M
u���͐jKUH�ڨ�`�`��v�����֭�c�z�[]���4I����$�u���S�|"�B~��W��QvH�ԝh�������e��� ����1�����������^���c+.-��ӯ�v9pR�\Q����g����lel�|��s�f���e��]3�0��b1���kS|g�x���g�ԔG~E�?��/s�����s>{|��b��=]Q�������3w��e��?m0�p{��{my��<���֧S��mrk����+��Ie����f=!��;f�/��c��\r�e�M ��ө���p��������Y�W�.Ƕ\�Ve����b�Q�_�7oJ=?y�a��6�g��Ut��
����ڞ�ܶ���������sw�ɹ�4ۈ#�+�XgK�Θo�.��d������u�]\����5o5�L���B��#��cV��O�Ӣm:�E�|i��vκ���f�ʱd�D�ki[c"�m�ju8���thZv����T%Q�� ���)���p��N��kU+�%��.L�t_3&`����[M�NҘ���s��_�T<�T�����W�8s:�����r�-
5�Du
�xۆ�V��0�
�x���Zu���*K���V�s��<���N�U�T���K�-7�v�W��d ��?�L�|�P�s���VZ-�U̪�
Y�3/.6�`�Xr3���f���V��Tٍ#�<=lP�X��z���F���y�00��Â&7� ���
```

---

### `objects/4b/1e00a26608408cf498df7060a3a241c4207e9e`

```
xK��OR�424c�����`���b`�7`49a�ڶ&���~���i������k����q�w�7�p8>R����p ��d5_뎎�����w�94�())�4J99y����:�w�޽$f4s(84r�|Jy��M#���M��3��������G��
��c���������������>W��v�(��u9��ɽq�aǕ���҉ �K��Y0��`��l�Th�l�e�d���]�*gɕ09#�K�6xiH&~��z}�s�WW~vh�ͼh��]W{�N����Y?�:?��ͩ��N�����YǢT.}LK������ӿ-�3�h�B{O{����$�8}/_O��������o���%Y��m[6�~�VE���&�^<��Yw��g����i�*2�s�j�\g�..y��K�~?���!J=���G�>>�x�R�����o��՛����D�,��qѓC��-���LU�R�,��su�m�yBC��:����]��#��ֻ�]>{����uW|3�_�{����������_k�ͳ����G���������u���_��~��pz���W�*��3�b�Q�޴���
�S'3N3�R�=:��"��S�S}�>���`o�_E�����K��yoN���!�AȆ�
��D�UV]��{e͆-���A��{��M�554汨y�EAwϧ�-;��|��?+�'��ew�l���	���4����{����o�d[��սN��1��/�Z~Y�f����;���\��u��9����~����f
O�f�r<sXT�Q��O�Tǯ�U����	b)��*��OtɌ��u���/�埼�-����8�ӿy[۔��n���}w��u�w����߱�ܺ�ԈMo�����u�1y��k�J��P��M��L����ݹ(e�T��d���U���y�\������]����s/gE&�vjS�y�����M���Z�nv8�ۥ�noO�֬���ނd�����T���:T$��$pR�2������j�M�ý/I^za�Ki�`��n�V�nlpn��b�}�k�q�P�'wͥ!W
�o͖y4͠3���m��ﺘ.�k�}|���m�og�>�����7�6ΓLM�"�k��B�VTE���O�����"�����b��c��L}�=�Y���������_|�׺������^��������в���S�>��7��z(uC����
��"Z�f-���.[��!d���O����̗yEL�ּ���� :-�qCXV���,c�A!F6��
͡{ם��'����zݝ�R�?����=����"�;���,�4���k�9N���<�DT�67�̒�p�Y��ec�����.%A]��=�+�����#vfͼ'z��?�t�U�_�Ii�4S���������	��rj��Z���8��:7��g��c�\��.�Pb��pb�=��)~(0:�7i���8��`���1���>���O~��~����ܺ���f��Yc�����=E/6���4�������f�$���^��=Y�{���1Ϥ��������������흭Z�o6�3����e���FGW�>p (�3E�����0���U���e
UzV���L�I���޽V�sr�:_��SP�A�i��<4b��9%4�Oҫ��#W�*�v8�L���](c�t=�<w�7�Ȼ�^Jq��kx�����k�;j��}��[�7v��kֿ�m�ۡ�����������bg�VXH���;3�3q���et`ߥm�l�n,��ۍ�7���e��O廲֜88!u�W�'ѝ�N��\�9PD��~�r��=ԃ�z�͛�ɭ`8�KsIg��~��[6^�t�>l�@���,��t�d=Ss��I���_�}h����گs������q��ʭ��݆킍�_��߳���ݗ�fe]�л�q�$A�
双&�o��ciؑ+�|��e��BI�U�����Q�?��2����	ӣ8�EM��p�i�֢$!���g��\�<Kf��U��VE�i�����7��ކN��8f�W�+3f�=y�����[Z���V��Z��;��6�}�ۍ�U3����,bv'{������m��ل��\=*�w���k����_1��(oj9�Ŀǋ�͙��a{\Q�|���S3^EG�9�u���ۧ?-
�SwX��e�I;�ӗ��NM��	������]�jb�.����)-;�7M4�QU�8�G�9�o�s�(���su0<�����P�s��,W�K/�-[����w���k�h�A�n�?���b�uD��Ez;���zn�_�z���P2G#O�t+�5�4���8Օum��1���}�_��|4��;��
�����{��i�K-3T�L�/��\�"6O[���U��D�������wkS�N�(X�t�J���0�
[�C�^���߾� ����ѫ`x|�Nl���s�-�������_w����/
�W�oٸp��d�m�>%1��n�VJ�H�����A@=vq�	���W��Q����8�)��8�P������}�����z�%�]���Jvw������l�2m�ݪ�?G׭)���w����w���[f��V������dL<N�6MkK������7�X���u�M<Z(�n�Q=]����ԞJ|�97�
�g��2�dh$u�qť���63�����AM���3�O�՝;�d�{�`˥m������v��ՙ?҂��[u�-��TZ9����=s:"�3=�Lo��<�~_-��ջ>g{��	
���d��zl�Lݏ���:�b��_�מ�v�9����+L0�1��2���D�"cV��5P�oWez��Ndo���ϥR#bV��)�Q2����b�1���YaoQ��i��yT�n޶y���L�E�׻�q$X��w�L�r�/d#[wο��|�_
c���-��o�|76���}+Cq廓�fH6��V~��7���S�xiI8��a>;KFy��I���ŵ2�e:+uƆ�~�L �
��lM��ug+n��ܰ4�
���Ԝ���G��n�"����_���������G�\U��רe�+��-�:oϪ#��������玕�|-
	��y�9e��H�J�'���9_
��y)v���k���˟M8�-r�e���S6[*�*\Z+�5��<����B��-��Z��	�l�X��$\�Hc;�h&����*�L��Aȇ���4.�g\o8R|���>蝎�ax絇�����F*j,U�)�5hxx0*w���ݛ�'��R�}_�k㴺�{����a��׻�ʵ�-_gm[���Y������wL�[3��t���Y�M��CYg
qHn~�V�;�h�����,���������J��S�����
��˼��~����&��*K�k�͆��m'g~v��5��fPRs�b�h>�8�(���z��m֎�GEg9�hpSdq=���&����r��H��ŨAw�!�-��k��xD�����^��vIo��F6W�~�9L/���~���(�����ӎ����j��=�"hYӯ�n��O;��������|m�:qOo��{�Ľ+�����ba�����M��Z�׾��*����f	��#�m��r��}�`|m���n2���=Y�"��ݽ,�����p�5���?R��W��h�<��U):Q���m�U�������V_����8�Ja��*|i8����T���ZśO��ȯu�v�i������CN�o��aᙱ,,�a�r�!7W&��9�t�s�a��c�O���
���������鴰
9����ɨ/�7�x,��a<���Es�R�uҎ!�v��&����I=R9�"�M{�hkr^�.���օ�fhkX����c�ZQ�Mmk6��t�M�Ա�����N���rt��Tɚ�x������eo�'X����]�r&�}?�������+6��z칓��)���բ��Ve��~��f�U?z�����f��{:tg��Y'��|h�uyX��u	˼�BM��h=��(�[�M�ӈً���Gw���T��u0����$c��|��e�I^��'����b��s���M��.�}�[5s�����49��#W�ֽ��n��珎z��/�T�`M��Y�#疛
�=�|U-P�q��b��?�kK^����rݩ��jA��6�T���as����ɝ�J?
��;�B#�:�H�Tp��3���"��/��3B�s>����?�U���g�b�kkA��W�m��p�eϟ��=�%���)G�X���_<sƾ���{3�]�z����Uoy�y�P�V7��֙�9%�z*}/�%�p5~��������RS.�ܝK��ޜ��y%��������^�&l�k�S�sNĕ,n{v{�m	�+7l=��"[-p1�bܧ�O�^���]Mϲ�rz�u��K�RKe���/g.�{dr����X
��#wWg�d�_7�:?,}]d�p��c����./��Gģ�5z�3E���l���Ū��*�E����w]�V�c<�z�<1ּ�����oo�uwnԪ�:W��MϨl�v�L�N˙z$.9�YϨ��͢p I��A��wyĎޚxrٯ�Y���Y*��h��m����jd�nz}����燛}�ݘ7eka�����U��?F5������;�L.�;���s~��2g�M%��-�69/�������ʗ̯��y.�3v�zW�������{Nq�����7���Uz��H��g�ʃZL��5�|^
�miR�;=��Գ��}BZݜ+�4_PK�f8��Of�򵷎��r�v���
V6󽚾Y*}��Y�N�L�Z�</i��E{��oF���yn�E����绂�_���+��2ߎZ�OY��dM�Ϝ��>SH]�*������O����W�sS6(7{,V��iվM<o��2D�w����n��/��\Y�y�z@9�Ȭ㌳vl=>�=&������ߛ<�������5o��~�q<.�{�f�~��g��w�vk��z����T�D�7%s�J��w�~��q���B�iS��m�f�eݙ}|����Kl�՗��?�TD+����(Ή�L�v��;O�4
H	K���#Q����ENI�:.6�;d��^޳y�v{}��y��_��_���=������k�����9�!.�xQ��}�/��N��,�8�!��w��iƆ�m����M���M�_wm���e[���o�w!}��UA��m���ߒa�?@�n���
.���S=~��R�|��a��_�����.V5^rw|�is+j�f+>yp���5�)����}�̐z8�`r��_��]��Ɯ([p�V��-;��^J�h����Y/V�S�q������Xk�Ǳ����E�%?K�ڱ�Vͻ�X�zi=i)��������������������=�������n�������������y���#�����ܬs�����MP�S}������j&ZS4��.7
v�y�)Y|+�M����,��,�x,Un�.��N�8鄅y����y��&��͇��݌o��<��}7g�I��	����)�}�-(���������e�m�����������������ǿ�����یWښەw�{n~���f�W��z�{�ُ9'��O/RIMN	Hy�s�Rs��ߓ��D^lS�R�Q���X�r���	qw&g�J����������
����S��D���u4B;y�~f�w���2�W/�˷�1��l5s1�����?�Hг�9�A�6������������������j���~��X�oxT���s����wu�O��)_[c�K���=���3K,v(��ZӦ٪�<{���C��	�8�hZjt�/-��,Wئ�[��	r�z���wӗe����ɉ��OO��|�fYr[�9�l�e�b�kO�8p����u��V�+����_��'���������_�������䱍�ǯ�g�s���m�s��c��{[��q���@ƃ!?	��Y��q�����X�;4K{�T����jx����V-�'�\�vݖw�w\;m����Mg�8�Xh�|�nχ��7���_��h(�D��,����L��&����m>���ϩ���.�����w���������������Ռ�������qoͣ}�x.���ؼ��F�ĪvQ�8����M�G�B�HL�"���1ga;��f
�����.?z����y-�=�b��q��s�)�
e|�~v�gg���:��&�б�r�W�F^X�����x����{:�]��r�
�H��YY����������Q��h���u��޽/�o�ԩ���M2�Y��I�ìC�I9�T�/ذ8z�s(�
2�dK���k%��o���&��R;n����b����_v�Z��'�'�ʗ
���P�Qs�����_Q����W�>�����5q�ߘ��Z���������&��sY���?5����>~L�O���?�������(��ݩ�����*��[{�<�Z�)���S�.G�U�=9���e=������.���^*%�]9uk�0�1��ǿT>.�sh���m�w��z�̻��r}�w�Z�����h[���Q<�nW�6�w�W�3f}���|\S�<~�R��IG�\c��Xp�S��sR�W;��3���O��7��__�y���}vu����$]�>���w�����������~��]�}�^�r�#���g�ޚ�;���emBݳ�qY*�ҥ��y���!�zD�聫&�,�0w2=r�l*�c9OOr������\�۷���䜑�i��9ᖛM��޾޽��Rׇ�}+2�Y�$T�v�?r����#;�o<k,[.۴����չ�A���n�M�y�s����������u���� ��0�1�aȸw�|����27W�Il��w��f��[u�~���:~�zerSh^�	����I�Em.�|�xb�֫0ٰ�#��,��p�y�M���P3���u��F������Ł�YW�]����|��	k5f^W��R43�w�)^烯_Ud�i�;��Хɚ��+�V:���j�~��_W�9_��碏�*�M�q���?��g��������Y�Í;�#cN��Z��𻭲u�m���U��|�m��Ӌ-�cv,{�k��m�b��M)57o1�v{�2_�r����L��"
�歈
<1/��Q��\�`��u��^���S�w��G���]�T������rq�X�r�i�}��?=��;^*�'e���p����u�"KB�2f
t�F��z�6,Y�1u�G䕉v>זh�x�Tr��=V)�3�d]�,�i�,u�m�a_L���d�+$�MR�q�I�dǦ�����9�дr���*�jV�R���n�����DV�;�K')��Rɐ�v�8S��Q���9��g���ߝ_U��|oHٛeK�x��e;{�i�ȇ�S/�N�m�3�rd�z���ެ�wi�f��U"rח��)ou�]zto���S➚�\���'�a���7��ܭ(]�u}�Y��Yg��eW�K5�Rٸ���#��3��jM���]}~Sf��Œ�[m伶	�g^rd-Һ�J���ɷ�;&N[�i��4�~}�ϳ�w�}K_趠�P���� �E���f��;���q�'u�ko������K�N��rS��R�3Wn�~b{Xٕ���|�8/q�h��l��Om׬�n�v���4�dU��r�'�5F������ɿ8���h�)w�*�F���2ꞌa��.y�<����u}<�ϧ���Y����\�s��r^�Qϫr��j�wB�Fn/���կ3���pV.~�;Ѡq��I	��_�1+�=���W�h��F_��,�&+^��o��R��I6�<(�2��򭭷�N8Ui��멁N���N!�݇�ӹR:㗮�_i�h0éU�Hc	���tC�N�ܽ���c���J�I�Br��]:u�A��Ӄ߯�y�yyZʒ��E��f	̝Y��Ǯ�������F,7����L�	��Wf,��$uW^VI���[_�;~�[H���-��^�eέ�Z�QD�,�;����.Cv��ZA���,�L�%�7M����d��5�^�\��n���Q0�M�F�Gw���ЫUR�pY�v��5���k�� �� ���"CÔզ�N�8wǲ�aܾ3-Sz�O�RT[�ٵ�tA2SS��ӻ�������c�ޗ�Y9��B~�������t�Wkvݜ��N&z��E�~.����wLP_�f쌩�jw-��.�𥉉d�顲s·���J̔��/�k�c�lջl���oT}�7-��s֋Z]9g���3�`�fQĕ�{gli{"~�W�� 
���v����#9=������8-�|yx��k}����ũ�>�-�'4w��^�5?��)q�:a��F�+�M���'^�$)ݶ�po����.����*��躨Ԙ�s�z��_��L�|O�����/�N���)hZuM"_:���t�-eߊn�J;���5�J������a������^tF;�����(9;ESqۛ������<�͚���f~����q{��X�zW���7r-/��\��bӻ�[Mt"�.�?ٚsm��%f>��>8qv9�U��R��Nl��M�e]��jf��E��8���
\�w��̢��3Z��V�K艛o��R����-ۤ4��%T]:#/���Ӹ��[�k���i��V�dw��%�>���<3Ur"�A!������:^w�����/�|�.U6I/�6�kpQ`��N�B�ɍONG��\��m�e�!1Q�o�ۤ+'�ʞO��u5�����9d���\,lk�aE��̯W�O���(��.��63��v�[���<���q��'E�K�$Y[�s����;�>/N��t�%��M���P�U7�x���e�"�v��j!���4U��6*x�\Yj(��ɹ�T����>� ���U�b�)��Ҋȳ!�����\�\�tbI�R��Γ��.?u�HAd����~���Ne�k���}�t5��34���s��
u?]ݬS�}fq����g5��e^�������\��7�\�Wך�j�S�����W������9���7X/h3q$X7�Dp�.{xK���
˓���Ϙ��Ǽ�����Û��t�����g�S,�0T����ukB�I˼Z�*��
Ӛ��1�Bq��Ѡ�>;µ�O/}����yK�e�N�m���8$ܝ����N��HHhna�tdf�Q�tZgZd����N������O�#�F��O;ͳ?l�i����E�������nj��B����������*R�����X|`�f�C��A� ���
```

---

### `objects/8f/c6c34dbaaaae76565f2198f6990150ce89301f`

```
xK��OR0372`�����`��7qI0��~d��T��?��3��=��ds�0�|rr��Ϭ4&�F&���7,b�[�Y8'���̴6�p�9��~�y?����k>e����Pp����u������0�)����av������/�m5�irrul�m��]���~��������t���&�m[����=�N����r��ڡUU;~|��J ��}�Lc#�H.����(.��\�NF��Fw��px�*�T%!F�ov�
�\-��#p��Q��~�s�vs[��=�:%2��Z�O�H���n�����e��o
?2���*������cQK�j�=�pd��`2ɮ��S`q,�{�pZ�����_˯��7hG���b"bjb�w�l)8�Y�ci��=;A��56�*`�wg_���#'2fˬ
y���f�޷b��w*�,~�˳퐃-�C�������gM�Z��$�sgEA����������rP���蘿�[�^�gW�;���}�͹�!2��\b�Ĺ�zrn�>|��ީ)$r���J�{�lҏ���__rW)nf?���#W�4��{�Ͻ`���
�\���^�������y��>}��u4���:�u0���Y�o�Ӥ�6��;�������=�����dےw^��.�]0�O�э�m:*�Z�|�;傗r��:-jX�&�-���L\��ha�ahP���Rߍ��s�d���_��dͪב�������ru8���쥾M��~�lߗG3},�~���o^�-�m �Z��B
�:��/﫽Yv5������������ˏvū���ݯ=���kw�����H?6�o圴r�v�'鿳mΘf:��ۮz[����+���8-��������%M�;�T^�����kI�'dyGv�,kQ��[!���Hur��?%O�9�������r񒏋����sSE����k�y'G-<��.�Ӎ;/��e^���ݼ"y����y\������y����+��_͌y|�,���� ��k՘�`�tg����;ne�S�x�nr��zj��i'Ļû&���Ǿ1_�Yԧ�$��MM`��
��}FHP��SwN_�4�sh{�Dk���;߮֕|\PSf��)��Cig��������ϫ�*�U���W�K`^Ϊ˾E�����N�����K���]j���Ͽ���kK�����,z��Y�&)�\��t������a���,wj�4s�G��L?~)�q�
���u'�u�C�#\��86I8�N��i-�jfk-�����c����k����-($��m�\�5L{[���y�|N�:���WػmOr7���R\v{�yإ�5��N���\������U�+��z����E��#>����y&U3���k	���ѕ��l�����������f��>9'�bʇ� �K�H-`�q�/�Il޺�ɗ�j�kE]7\lu�hwȶ�"ܥ��<���3Mr6c�����=�w�|���b�|&-]�I]�s������=Wv��ٕ���_ONX���m���Cߧ[~+ULX�{u��m��E�ӯvvi]�2�z+��Ŷ��_��v�^�-ٻ�^���kv7~��Y߫�=�tn�*�,L]��.��i�Q���kBA�ӈ[�Pum���W�5,���vr��Z�S��&��-ܘ��g.-�ry���ʡd����b�Z¬ٖr:�2m2K�	쌺��y�S�ŷ&�\�n��s�ͽ��n���ִ������|s�����-WO;-�{�+���|+2^ϸ"�z��F�I��v�/R^��*�ϼ����+S�3���o�}5gd�^�n<e�l7�����:���[?��������~�^n,�?v���fC^Ǯ���=1�n���s��_E����J�K��ԍ#���c.q��3ܪ����c˫�m�������NڟF_��u�,s�lm���nZ'��|�F��ݼ��^W�W/P�H1�`,c��B��[���b��ˎsv���;*���'���Յ�g3F���r�����5��A�Ћ����,����uv��4�� ��ĝ�:��L'��O^cY$g��(���sب��ٽ��K�T�u��|Z�R�o�	�Z:]GRI����^�rŪ���G5=ə�S�xF���_������h������q�WM�(\&x2���c[��>��9!�C�LX��K�U�&�o�k�(���D�f�+e�ބ�yzu�����g��w�0����
5��a��w'2_O^���9-Ԛ����֌ƙKY������c���c_.M\x?��uqe���͛�?ψi`�qԀE��?��6�c��gnL|q|^����Wu��������-s��������6�R��T��_<}{���9�<-/(�Ap���u�;Y��]�n������e�΄sM�X�#�p�gYɧ����$�w�q�isYr������kR;ֈn42��31ؤ�թ����`J2t�9Q+H׼�t�������lk+5K��+Wjd5r^��1K{�`w�]�KA^�__���״��������qH�_���Jz�&�c�����L�}���*.�,���B~���3<|Ԙ{lFA���;kY���O�9��Ќh�
Q�D�x:�Y�e�b]1�%#��$���j7?Ma�}oFT�B��ݓYֽ�������Օ6��e>��ܾ��9�og����w%���d����T{�x�e���������\�u��ƅܦ����J���`!�`������?��g�n��\o�EW]͝��cך���jm��v]���(S��eI��ۇ���\w�?�Qթ��C6C[��]�Bţ�9�Qwͻ��>�v�i�� ��I��p���uUF#��~�7��_���L	b�/��[��Ɩ��G�u"�~���ԝ�{�p�w��:9C������K��ɆCW:|��d���1�ߥ�K~?��<u��g��g~�k��z����^�/�w*��:�#8��A��*��?;W�{w���e�{�9EOU�=���kS��_������UIL'����I{�������@��P޹n�m�)*f�޻=euVT�{��Ɇ������Z���{�U�T�E���8����}�7ת&FK~��͸�OMz|d^RQ�y��=5�L�o��$ţ$���3���c<�/US��,
�)\�P<h������D_�����E����-y�Ι�[w���w�7-�/����������o��Z�3�L�ņ���G�%%�DMj��@���5*͓Z.��y��Z�|s���+=~A��ݾ��Խ-k��ǿ�J/|�u�rѶE�^M�lV��J�����Z�����~|�|�@IѶ���/[�n�,����V&w�����r^���.[������w��ZS$���͖�W���lN�(�fU�"�3v���GO\��и$��$�8���0ϑ���.��zieq�ۓ�WG%����Vm�������v��ҶQ�'����w�O��מ���w�ʓ}uڃv���ĆK���z��[�[�6��Y�\��_�ڟ�����':�%��K�v�d�����ɜ�5�6�<�ʩKS���,u��X.*�"���cR˅������g�8��\pr�dIf�
�Q��Z^�8��pg�夙�����w���������0g�!�����ȅ0�>r����]�7L���:�tO��������U������}L�!7J�l��z�L(d�8�n�4��#B�磴��	W[��jp�Y���ܴO땜�'>�����.7��݇�'�w\��F������	�od�m{��մn�U��\,��I|tP����1�5��w�,�_-��r���U'���%r�dz͝��|�����ݹ�%����o?R`x�v���K�Y򃧽����:���܊39�]�U⮗�M�!�1�-��o�my�
��˚"Rł2D����9�]�����=�N���2����;���j����y�v�|q�ȴ��ߛf��f^��V�ۮ�_�#����JTr�5�7�U�>�Q2��e�ޖ�'
/DB5s���t>QV��a���91�5��8?���h����+�K>wd6����b��Q�`w�	ѷbӍ�D�<���:��J�t�����=٧E�ר��3%������������["���7������N�e�����לW>_v�z;�ר���AB��]�o��3#fŒ�:E�;e�϶:E�l�n+6X�2���yRj��$��E<���5������dӟN�i�����'/��ݯWq���C��+��1��Z����qי��Y'6��>\�q������9nԱ$8�3�^1-8�d�G�;V	�S�k5�,�t,s�f��
I��8gZ�'�-�PM�%�Ès����a�#�-
{���n]��Ф�O��Xn��F��srs^m1�3�d�8�3Iˑ#�i˔t���л˦ޒxo�����~[lç$�X�zJ���>:V��ݑ�xU���m�Qgi��w��O�c�vW!���o���n����񝵍kͪ4i'ge�
AL�>��t��̛��|9����u�Hb�Õ�{Kz>�wUV<�f᫰
o��ݽ�J��cÐ-1��1�q?}Ԯz-�T�|�O6g�7�oNlj	zgP�%p_����&�'Fl񺩽���箱�͜d�Zp,Σ�#�e���N!V>�����(}�,�{�����K�n�J�4�G�у�[�\2<�����rg��"�k^>m
�E2��U��t�8*�d��u�g��k"����+*~��� ]�l�����$�=SsrW����}���r�*5{&e�����5S6���j�k���}�������"��U?M��/�?�f�QS�k���.jqfxg��91��*�����<�A�R�t.����c����Y���}z�G�Zm�xs��½�	�?�MpU~�{p�:����G��]�[�����<���:rܛeݒ��j}/�4�=V:��0�����M�&�EZ+<wŭ��|]�����دg���ёgm\���5���yoo\��`�K����=��<vx������^c���N;vɫt�ǹ_t�7���~190��7c�py��KC=�),����Պ�|��mjp�g��y\X��cee��0�%��{�_K��z}���w3~�>�S�w}�i�kgn&�m�{��?f��+3�����r>�`eqP���=��m�]�H������weD�t/`*�jh]��)B�T����o�,T�9�M襩��r�uW�+�tD^e�1��Z�~i0�>����:�̕Rˣ�����̽ٸ��1_ółϷ����yc��v�NHz�Q�(�r�eJiP������Ք/�����Oݛ�Oߩ�s:s��w�S��K2�֤l�|�P�����ӳ�O�X�wHIo��ҝ�13ʢ~{gJ^51��5�-6�ڈy�/Y�[{$�xtv���ը�a�I��Sw�RuQ|�ۺO�������;��]Ւ�0���q�Eaβ��Ǘ��k��l����7�vUW;��ɿ�޸�s���C�����������;�O�:S^j��{e+w�?���ݻO�7��rlﳛ�p�|
���]���zt��]%sudڛ,��/�[햲)f��X_��1���\�52
Stˏv=�X~�,��Us7MZu����L3��M~W'�x�<����G�� �ǩm�%�P�s7�P�?����=��=��3fKݶ>1���ԏ����nz�<�����7j�]d izf�l�)��_�ԅ�EW�}/�:��kw����S-��q�P�|�漌c��^���~o��e�bʔ�����g'8C���g�Ͻ��[6�Xڍ���o�~�l���F�����k^������|�)O�>�"k�n��ĩ�����O|�]r��)��=w���i�|�~�8u�OW���u�c�=��ޫb/�9=��ʦR2�6g�E���u����˴L���)�ʖ�v�.��ӯlp�U��W���Sv��]����Y��3��/
yl�e�C%'�)-N9�黵���ࣙ��~�y��?���9�my�\�ϳ������Z�r�5���y��S�T���v��՘�|v1g(��6Q���¶;��L��7Nye,"yVX{z�JOVW&��e���r�u}8ѥ��`R/g�N��E]��-��q�l輸#w�ޒ{�k�s׉�Bu�k���JV}���͔�s��7yo�Y���8wc����Q'�wm7�.�w^����_��>Zl��$�乤����K�>Y�?-gQ��,�m-���]�A���?��Z��<e����8�[Խ�aX�s�㩄N�ɪ+������E%x�3#�o.
c]�v��O��\��U�~�t�T�rj�o�c����кCi�Y�����������Xje�ll�-�P����_X�b��ǲA���V���ڞ���Us���f�L�"n,f�p1rP�j�/����S�S�5Y�*�g��:�'n5)Sm��˞�&�7?V|�T<`�3��'U��~`�b���OmR�Z�����<���<��Oxu�v۱�y����ӓ�t͝�k��Kgy�)���Sj,]����-�>5��������nk�������Ν{�zzY͝������sS�R�H�)��S�T8>�ν�8m��7���N-x�4�����X��� �X r�K�K�C>w��4�� Q�Ț
```

---

### `objects/7f/332c128c47304991e953ae95c536d7562398a1`

```
xK��OR�003a�����`�����aHl�˥�igΛy!���~�l��&l�d���+o�߅��̪9�����ý�1�c�η#
���e����mGڱ��}S����왠�����v�e���N��u�/R\�{�G�j-][g���w��'�2.��Sye��D'i�G���x�I8�6���¦/7�$S����×���4YL�߭�����]�n1	���\r���3��s��e]�|����S�1E1�.
͜���ߣV��sz�{���gs�o���������;�>}���~����o�O8n��&(t�K�Z��\͸�;>L,��{O�!��<8ja�"='��l>GG�<=��v���/�`��t���f.�=������]!f��'D�gq�z��D�a�?W�/0p���r����Uå�;v
%���}%T�-ਯԧ�۞��F׸����;�]�ʝ8y�ţ�e�����K����O�rp�^:�(��矪F���_k0�7X.e��?�]s�6$���b����OI!{��Jd/V��q�h���+}�g�u�B	�/�YET�&	=I9�Qr序�W�L��g��l�
�V�	r�;�
�tJ�\�_Bw
W
�5��+��.I��:ܮh�h=���r��-k�$��}����m�L�鶪���>�m_��S��K�6�?��.���@�ח/��>���s�o��}no޼�}��3̞F���^����kS󺴭���g��������-��s�^�K넃f�������i;=��~�|V��Ιi�7�ej'��~����R�W%�{O�% #��Ppe��"�"r����Z�,�u�#���Ň/Y,NU
��tb���)3u��k�g�OT�
e���v��$��5�^�o�kw�:�ﶉ�r�X_1��0�u������<*3�GO|�_�j_mT�l�����v�z~�S�w��i6.|1^�W����_vE])
�}u������_�֒xr^��袃���J��^���s���q����s��}@��Q� r�B��8�R�\��
K-#úv�{�,j��A��Z�+���.c�4\�2���@���l�����������QWW�;�ĕ�f�΋��zi~�r.�n���&m�Sx&���wq���g����XC6�Z_������b�:��H���lu���Mj��/����Dݿ�ˏ<9%�\�u(�C�eFh��Ň����l����^��/��D����]n���ă�^�l5����v6���Os�#n��,X�3�t��M'��.<
z��q����3�O�y8hVT�
�b�sת�/
w��/��㵯g8'e�	�D�1?vf�l���G�$�T5�����������Of4���~^u��o�//�<�+<&�.s"������w������pyv���d��/>AAf�����U0�>wW^蜱�7�U,���jq
r56dG�O?��kڥz�,�%y�ݩOG�s�\��HHâ���ʹ6�ޯ���}���̄��4$.�[�,������5�?:��x��R�zgㅛ�&Yf�������?���u�ʷ���ߟ�����.Sx�L����}&%r��]ǿg����ad�rF$�ck�&�/�T���_R�^
�7�;J7���QVl����n��0��j�l֍I�3Ēf4��پAZ{r]�ݺ�#O�������F�E�oM����X��Y��z^�_\��М^~�g��u�?]S�C�tޛC����$��$|)�Ȭ�x�a�Ƃ�
�������b������_���Z�L����_v�k�e�Ek<�NGn��VL��I���Sb r���$��wf�p�q1�qMy�7���·E���m�U��M4��Р�PqTfkv����r��I�-֜t/���yJ����2n\�)yZJ^��1�m�f�Җ��{�u��1�ks_��k��L5�;��3O���a��ek=mՒ&~�|;�������sr�1��w�V+^� .�"ѝ�	>�Җ������u�ю"M�i��_B��]
ó���f1��·�o�K5Ѷ|���(I$�aV��sC�p����gf7���r3Δ}�I��������e��x��r4.xSo��*��h��������^��K�M8p��ޗ������t�.���_��������돼�L�c��u��A>�qm���e�Q�.�teuvv:�ܓ"�����1sZx����E~�@ᯪ�#��p��n�׷�ڥ*�*~Ys�b���}�G�-iSy���Ȍa�Cƴ�1jvS����y��\��=}���v�ERJ�ά�_���f��U��.���KV���3����ͪ1�x�����,�G���ɻݾu��[P��8gi��ajw���u��mˬ�W}�B򾂭,Z��d6�_|��ĵ3
����)�%w+�^������`�&7c���jq�;�)-fd��:6���N��cc��h�dj�1�/i�tl�I��\�ݍ#Oh៶U7n�;v,o^[��ͦqN!�I[5��_��w�i�w��'����2��� <0,>�l��V&������x����������NQg�{��:{���/VY��B�x��/\�Ә,��� 8cs��IQ�D��;@�7R_r���)lG�TZ;E��'�W�Hb�D��f�-/��ɝ,Z��r-�Z��|y�V8��<�yʫ7���w�:y��K�X�v������[:��3�
���x.���K��p����������ޣ��MwǇ�����8[$&��vR|n�9C`����������g���1�@��4�P���,�7��Xqoz�p%O#3�)��n���f0\�4����;q�TV��y��kb��Ϧ�"b�
l"�Թ�%���}yoϬ^4�Fժ�KӅ>Y��=ь��$���Gmʠ*)Yb�����K�qV�39�Ri.���~����X����vX,h�nQ9a�c���T5���Z�,:=��iA@o(��ӳ.o_}E�ꌫo�|����6{�V�i�V][�����$��ZS���i�p(,5�w��V�q��9G��4*�Ԕ��SQQ+r�]�M�]��i3�%�ɶ�2�+��)t��
ݝl#_�^��S����V_?�-=�* ����W���,��ͻC��;�9-�zB��Sh��7���/�}2y�&N����Z��O��?�뙍wfss�{l^�7���H��w˅U��qo�����y-s��g���K3.�c�xr�tÛ>��e�L������C��p�X$��ڻ�uJ���-5ѳϺ]?ߗ?l6��7���]����q{�ﱛ����w捞�ũS�</�WWw�̖ۿ�OI���l���Y:{�z�w���ߝ�P+ݧ�9��S�-F����87u�w(��Sk+������N�Lf���MG�i(�g6����f<d\^ż=��g.(�g��`��q�Z���S��Oy�j�U�f��j�K�#��p�x!�Y��e��/UxA����n��?�l�|��?7���5�����|Μ��9���g�����-��_��q�a�o��m�Y�JZ��x>|ȫ6Wث�y%�vPq1�CNU�T��WV^�
�C,DT�zIsl\�s���a������-'Θ��Ȣw)���j*f,"�lM�|��n�k�2U�y_�o�������ɴ"�����֬s�����u����ugO�9sߓs>����{��e�}5�M��x��b~��_,N,t(Pӓ�^�1m�*�ǆ�%�+H�67G��P�3U�+xC�i�Ǥ8Ck����e|��T�8������}}���>�����X�Ǯ���G��ʯ-yj���g��"����_��� q���ړ?>���lW��YYZZ���iEi�v��ҟ?�KO_���~�yKΟ;�umw����:3�-
��+m¤Y�:����>��p"G�ܩ�����,�)8�-�TƪW�~�5�g�_{y�v��ʋ�
��d��i��i��L&<V$Ө;:7��� %�?'�o������ӧ�0�����?������7�u�կ�U?�˃ܿK������V�Lg]������-w�����ٮ�T���Ɲ*�96�g<��^<t�:�V˫1�Zɩ?cn�Nظ�e��K[�D�*��9��QiI�����4ç\��q,ȡ�Wꕌo�W�sle�|xq�鋳�i6W�"
7%���*�!�1Y���ś%',�:�i����_&s�����M���k��oMt����
��&M?knr�M��qw6�����<�������O��zo_n����N�J�ל]y�$�{Ҝ
+;��:U3����^aθ�l�:9=.��X��`�yj�Uu���%�{YwELܣ�U.~k�k�����1��Pcꙋ1�v-O��h����.a?�c�A���g���+/^a0	eʜ����A�F�
�w��w��aZ󁂄N]#�@���{�h
�ļ���n�Xtyݾ��u�M��n����o���s�`���/[�o?.h��;j�≕ۼd/�֮۰_|���5-��IB�f��f�����s�Xsr�V7���)6:�{���h���jm_m߂�)��l�6?lt�����Z�'�f���8�0-�(f��ט�����S���I=��R'��l���k�b�CZ�k"��ou}�ZN]���St�`ʖK�~I��$�:1��w2[�|�]�+]�"^�3���5W]ܱ��9we�SwCUg^�m�S��:�늞[��VaQS��ȕ��ӽ<��W%�L1Nl�[l����?K�����n0��ѦɅ���e�>
z��P������J���Z˕w���]I,N����!� �XY�t�m�K����� ��2��W�pOர�U�֨�=�������I7s�7��b5	���:3�.n�(�S�n��ݎ���#��66{���p�����l�i��<��Ϲ_Yq�X��ųsz��q�Mb=�\��SY[��d��<>k������5��J�P�7�&K��w���:K��6F�f�L|z�s�D��IMF6��_�:��cC�'��	���f�� ������{~w"fqq�𾘵z���HN��ƶ�S:Y�:WOȹ�$+j�����wק{�w�����ϫwEO{,t[x�q���Ƈo�_���i��E�;��X,�9f�1w�ff�������o�Q�2O��R,��^��}��+�9e�⢦9:)��bj8�w���f����"!G��&'V��TX�Rb�q�g��9a��ojoa�`��rg����Ω}Ӗ��1ix��#�=�ϡ����R9O�,[��?��7��֌����Oy�������Ȉ���ׅ������k��,'��{Q4㘐f�Ŗ�ұ��4^�4Ud������W�w)
V��4���c���"ٿ���-_��v����rxXt^�J�k�����X^�r��u���5�!�5J���ٓDEb�z��W{��k^w�5�ϸފ����(0ٛ!�Y���Rg�"�?Oo�뾟�ս��.�7~ڵ��F�l��|��^��n���}և�;5�i��
zks�슏+�oۿ�]`�,�{���ͼ��������+M�[�����e���I)����L7[vއ3?Ez�2���ͬ�\���ij���ϰ�Û�t��D�'ߪ��>mlZ�q�Ch�o�t��jo��a��w��Y|�+�c�=�b���5Z�`���o��������{��j��+E��~'��|����*=��Y4X�!��8šx&��TY�w���^�������F��������P��7k�0ɠ�sO.��0��P�������a�d��fvFn�ُ+O�hg�%r�a�6������lu3/���*E]�|��k��}F�%oǉk �?պm��p�e��J������׈�^�j(����8eG]�މ�~��ff=ֽ"oR�s���z���\ϒ��k|zr�3����R��>_ؚw5f[���3g}��5�S=耹��Z��G~n��V���Z�;�g��FQj��$V�
F!_�]{|D"���lu�-՟jX�ɗ��sY����Ž��ᇎ�]U������UTy�)Y=��h���F�Z�=�%.ϔ�y-����d��6��K�f��U��5y0��)O��EQEA�M��+�Y,��.=ܣ� '�~�MX�dK3#��엙n�x�oS^�^�Ƅ���J<����W� A6��j���\��ސ�a�9�s���[kgO쩼3[�`��dF����/�:�t�u��}��S�U��:�Mc-���H(��G�R��J,/c�f�^���	���:��\�	�H*�Y���diAϳG_w��/�vL�����l��G���LJ���Ұ�6Rf�m�ϥ�*ZƻΚH�M[���+�ϓ��b��5���پ枲���ܘ����~���y���=Qi?|;V���g�ѣ�7T�hm��}��Ţ����	������u�k��έ��:ڧ�f��Kd�7��7�hzr�{�BN�?����@h�	��{;zn-̯�	xa�t�X�oֽ��=���.�)Q�bŊ"^GΣA��1.9k�9�9�ۄiZ;U�z��5��ꈽJ�7m���.�������W�5xm"טX�-�w�\����R�坣��.Sy�|q[�K�V-Ӱ��gvg_�ڡ{���2K�2-��j~Ѷy��G
�ӕ��K�-ڶ�Q���k�3u�K���T}�#��;Z���x���4�p�;���|��{*3N)E�	��
�Z�R7�׮-�>�|w��Z��~�������;M��[3e�͚�,zʥ�*7�&K�ݱ��bǵ���͏��+-�%p+X>����+ڟ1��>����}��f؈��n��(9���C{6흩c�u�oЎ�\���y.9��u3kj£�j��=z�t��� r�O�?V"��ܙ�)�-��*vf���+�)mWæL{��c��Cn�ŋ�,:v����	�Rإ\�%�<�Rpb��+�Ak_|߶�e��g�2�~H�aFJ̵%�)׮-�
�T����勏L;��v��5�Te2��f�t�sNg�ےuVi񒋇�4�����uxK麠ө�y�}����H9���s�:S�m��i���&E�y�In|d�j��ot�(q0�hEXƯ-��6�ʯ�����s.\�����ZG&�5��0���ے/w�<l���gy/߾$M�˧i�u����j랶�d�\
����sY�����䍭��U�N)�v5�x�a��fS�f��tIr������u
S>M���g�v�����f�w�/�۴[�T������ɗ��9�8��hZ�R��wͦw5���m1���G�%������|�X4)J}�h��w�<+���2'�j��i���w->�Z�hi�ҋ�SU'ݾ�`Λ�7=LW����b��#�}��z���b�&è�[6'>ۺ�S�-���}��eU��sh׆9��K�մ�t�~�Yg��D���TM�����[��&Y��|��[��
S�]В���'�}�A�����k>��NRp7�{�i��LP�?�zq�nA���#V�]��g�E,J_2���'�Z}U>�g�ο5�'�z�I�r�s^�6�NM��{o�|���୯��	�J�}������/�>)4�w��w�̿M"~�[L�6욲u]���k>o�]��z�ˢ�l�9x����sN�z�y;��Oe�}ڵ�q[���"��J�)!.+
V)+.�ܐ0Sڵ_ꈋ{`Y�1��oul4�0\򹫴|��[�̀�"}��>�4֪�Dw�%}*�U��V:)>a��q�gw�\sf����w�VK��_M�-��Uq;�����ԚiWΨ����=���ɣb���r/l�����˚��u}N�'53�;�m.�,�X���"d��X3Uc�ɨ`����W�ެK��մ\m�촏��I���4Ym�5�e����e�������z�~`8�s��pܴ��Y.W&��^��gϲ6E�Yba����4�����6���g���"W�n�<����75�y\����J��_޹z��ͺ�:?m��aԩWkո`�)�/WY=������9۾rU���������ᄯ���>����z���������(��k�( À�
```

---

### `objects/6e/9a6ad850a1ba81585673072c9321cadef8a9c0`

```
xK��OR0�45b�����`��m:'������ɦjGƣ8�ڧ�Y�_}w��sg�2&��5\�bv� �\��{p�9���""""�����8���=�����"�ł���r�޽(((�e}y������/wqqqq,�G��$�����3�������g ����}.����ҵ�9�-�s�s;��zF~�s'0�O�N+sӟ!������f��r�r�W���G,��K'�<\)*�l�l��`&�/khhk�#Ѻ�����)X��M�Ą�7l��-�y�n�C����ߑE?�x
��iӽ��B�I!1Jw�q��\՚���l�~5�W��o:�iq&W�4>�_�n�D�<��<�ݺս����x�`��M�c2������IOc)we�����0�=���|��I��q�fN����UR���c�5*�O�����_~`�܈��ZWn;	N�:]���f~�N����9�Q�+Z�b���f���b���[OK��Y_����k��~��x�0gΩo1���<�����g˾������*�
�;WJ.��fo�c��P��)^S��l�&.�J�bacl0i�̸��1���zҳ"���S̒�,İ�ˉ����o���9n,R�Z:��t������0���v9���aVmY���\��3E��]>B򓭎�H4�K(.�^�8<q����r���&w��\�!����=����Ƒ))AZ���_7M7������^���������m]5����x_�2���W�q���=ͣ�h�q�P���dήl+��Eu�H50<�3s��2..�S��qnLSX�'�I���6��8��ܤ���S2����k���d���C+/�9�!�������9�>qvdϞx&��vJ2y����%��o<5g��W�S�~��7#����NS��+�>�y���ٽ�������~^��}����p'��"��5v��=��p�9�fp t�AI�9��_��)׸�&M���D��[�Kq�^O�W��P����Y�xv�ۿ'������e󟫡:m�ʟAS�6=�f9}X�R������JU���l��ٵō���������-팽����L����c�G��u�����
$m��{�Z��������(JM�������E�3��91��w�����oT�3��]k��HqXO�=��`�w��%���Ma��wW~�ʆM���VhE?Z���w�����V7���7�_��q�:�M�;P}�p�$��sO��_6��ɵ�EN��S
�9�Y6���i�����$˺����^w�+��C�o���ޥ���m5(�S|s�<
��jk����m^�2�	k~�?�����O�r>κ�9I@@0@�)���Q�|���"K?32�7���/��������=�{�����[�_��_'��Z^c�����ﲉ�zo�v�L��[Z�G�s�Y���v��"J��j~+��=wR����k���|������B��E��"~罐�'Z����������|�i�������v���W��--KS��~�][��dw�V�{Oi��s�̥ �;m���<<2��je�ˎKΚ���� �+jMa�'�cI�������71������k���8O�q[?�YↈC�͙K��1����Jt9���cR�BRa*����W��/9�����Ww��w&7�����Ν���oNO_�����Js^�8�[y���IV5{��H�����J��t�[��E$Xn�v�OZz��m�>���#+���v~# �СS�4���*�ۦ0\�7�4��Q�oҡ1�����d4:R��䗓���Y�;��>��!�ѱ��{�mz�����5�&���aXvJ��w���?�-��f�`?��@�ఫ���ܻ�%�0��C_$�p�]7�8��Ys�����3.S����:�b�=�K��ɉ*.�ig۠2��P�/m҅�+�^��+]y�1������dé�b�S4N��?D�ק	���`���`����gČoŁ��Tw:=9���sf����1�s������#�h�͐��.��Vo�8�/#X�t�ۤ�S��$�3b�|��m���������ބ�����
�~z4�mi�U��VwN��9�y���{���Ǿz���)�q�2�_��.�+����AR9���T/u��[���g��~�68�te��� ��kOj`�}d�i���N�������M��!���z��s�~M�0��֛uΉ5���_���D���U��e[�#�T���2/�-4��A��p��YaiQ�Uw�M]�������5���v]z�����7KT=7�(՚�m^�:��WkO��o��?��yx����o�����u�����{�;�ˋ;;�5.i��h+�_���'����.B�Oݙ�,Y���_��E����T6)�<(����V��>�:���,^6�I��.˼��xޜ�+Ζ�̖���5mwI���׮�*��*��r[N��rT�z�M���3=��R���l/�].���@S,����7/��lo�<�l���5K��������+�Xr:6�\�j+eq��?����+��b�n�єK7Ik���e�u����Z�e��34�0n�0�9�+f��h�|��hӊ�y�f�����?�R��W��Wt+���]�eUpal0f�q�I޺�f%ө�}m���ֲ]����o�Lجд�_̗����k����e/�^s7��C��}3��g�-�����ǣ⢺֟�����v�K��±�Pi��O�^����Q�N�~}��Zj8���6G���#�W����"?�K;˗����q�f�9�F�G��m�ӌW
7�k���L���8���q�	�2ͷ>�n^�����j#kנ��3�:�j������^.2�D�v�wO�'�J�.�X^�i	�S�G���qSx0'���ً��O/2�710��~(�ȘV�)6�}Q�����/�{��.vIi������r�-y�J�Ʃ���U?����"�v����&\&�����qƖ�;�\�[�K���䶅������g�n\�2�������l=��Q������Ӳ?v�s��d���#�N0�s:���V���fKi�<�r����=���wz/�p�ta7Ƕ�m�,��v�6���]x=5��z�+o�k��թ�<�<����+ֽk},7��`�] ���	˸ߺ[�^�q����t*�
����r�g�`���Ľ����+��]rZs���ݖe������-���$�<��ы�����ےjP�����������D���֖m<�u�����'C�VO2�r��������{3k/{���m۹�r/�ݎ|�����1`�}����>��Uo�k�y��{aY�/S%�s�0_7c�U}S�uW:#5�`�ܮ���;�����Ǫ�qF���ek�Uݞ�S�����fu/ۭM�s�/��[.�W�ֶ�k�2���R��fIw�:���8yǽ��OF���b��;��v��sV�Z��c�s�թmO��>6Z<#����si��g�PH=۸M6R}�A�}�`�c��A�'�qy�����cǺ�#k%笘�Yw�4_�*I=��bq�
B�zg]�>���l���_��@�ԫ��`<���Y����N٦�͢U�sW�M�k;��E��<{"ã���u&&ғY]��,Ԛ��?���W�����~����'iI�ů����#���nЩ�}VOm�e_��s�~�,�5_�v������/����|��.jf~�����כ�����'�����N���_rv������,vm{Zl����ՠe�Y�.l����U�En�@�Ҿ��������ش+ݏm�ݾ5�H؎��U5A�ɱiE�鹉�۶d[G��/�<��bƼ�;uS�2
E7m�u�d��կޓ�1/�%7��W�(���W%lv�)l:T�iR_Pxhᵀ?�=��Xo����xV�o�<�����,��k�:��Q�^������[�ey��7�LT$~��-4\6�M���(���ۀ��7J��/���RCU�N%��9W����bjt\)C�����r��������UL���ќ�yC�Г|�%{���3:�w�3�~�F�D�]���<�l.����h�]k����b��7mX�po����iғzn�
�|�H��[?�Η��u���}��zF���<}�d�����߯��~����?��Q�?m���p�iݦC�F���g�s��g}��� r��Z2�C����;w�?T�ϻ=�F����~>��^�,��Y�lu�^�11�#��a��d���RGcc��4	�z�d���f[ר��G�ػc5�8��Ί�:89P �kI��������յYY���-;�I�:���e?���L�gF�̷�Z�بj+�b�w��B\7�W��8��{��钖s�~�������5��Us\�U���P=�ɀ�����5ݚ��]�z����X��~�ᒂkK�
Ӛ�oiX�˷��t|}e�������f��(ҹf��Nl��ε�s3��}��h٪��K6nV�cR�%"�5�9���ߖi�1ݚ6s����ba�Y����춤J̑)��3'�ƞWN�a���*(-��lhO�Co���].;y�:�Se��L1a��؅������~�I����݌��k�/jӺz��'e�c�kD���a�^m)Å�D���\�����N��S�Mr!��U.K�e��#\
�>�8�۱X���[�}��%ϴO�����'i�}Y��ke�ņQ[�\
������m�դ�m���]��w��ǯ�nZ.��:��%�ҵ'��^��i;���ǟ��L���~ܝ�2nˎ�W&V������� �!��9���w�T�X���ٿ,�u���V�+�_]o#�N����8�&����S:V[j���znӵ���C����ʸg"��Se&�y�>}}[�veN�܂�[������(Ģ!�SY���o�f�ٱ�����Ns��d1϶�}gzgd��~�$Y���xɝw���Ђ�Yg��x%Y�h�ћ��蚐�Ή�T��g����ܟ�Z���p����0���F�3���I`K�Z2Oz
�I��Q��z��s|fI�S������k�\�M����?��r\P���S}W�h߾8�d��K�~��%�Q�+�u�d�ڔ[S�n���vn߱�����~w�����R&�{ջF���et���a�������H;�!�}�ݫe[�w̽�w�X.Uh��K'߼��Ҳ[|��-��@��V���������u��u]�������_e���-m�t���`��w�/ظg������+͕�2��T���rsv@F�/�ꚧy��-r�8��9<�tqR��@r��{<�����IH2;6{��fɛ��niZ�a�UqlQ+��͞ME�A�G]��J��N�m�w�I������Ķ��3�(����f����I�Yk�?ǦP��穇������,�|��U�l�י�d{�=�സ���3+��Gܜ�i+r%Yu~ou�Ӽ6wδx�)t2R�|�&�Γu/=u�'s�����\z�P\�k�P��YE�Sn�6���tqOv������\�<�;�6s�z�g]�����ɧ�e���VFeh��,�*��2u���!�����I�4��s����od��>����5�0���hÕR޶pU�P�Ve�ik?���O�J5,YdYU_��̙3׋��[���\r�bC�L�9���9
ld�x���/q_�_��	���VZ���CE�y�V��ݿ���<���+�P��؅o���_�����_�֊�`����}}]��
B	������\�p�k/a�N ��
```

---

### `objects/a3/63072b58bffa146e89c1e5abc9e73058359b66`

```
xK��OR0341a�����`��d-�������(8����S���M����:n����3g�2&��5\��)f�`�������]\�˫�


�o���߽��z����������O�

j߽���&A���a��)���~���a����������J;�I	�K�j���㹨v=�k�d���������A�Wԯ��a�Y��~��Ci�3�_�>�lv��M���*��Wl_��x�|��x{��/W�|T�6���t���k�6��9c��{�j�#�����s����~�oވ̒�>���������Gm[9��]͹׾���A���y>A�=�k����W�o�i���ϣ��_�yף����J���ky!���c-#��pmi��q�zC�%���ǒ�_�_L�[��qVC�
+�ˊR�od��Nb.�n���r�Og��3+V$��p��|�T�:����p�p���"��Ku��kI(lz����x�5cC+�E]����7���7v깰�g��3�&o�뗟��[���+[�\8rdۦY�k�4����,˯��4��+��~����S$�5]by|����4_� f���Wτm��z�M��ܮ��h���t��ZoT0��;��:0DD�NRJ��Q��q�]W��e�||ۓ�����o߰��cʷ�u/g��,����ˆ���Q�ž�/;��Bg�ɣ�m&G+����l�{Ou�����߽�E־ԓ_���W���v/�_�W�"��j��߽�-�l['k����c��������-\��a�L��5��}ۖ+͉ұ�U���|���� ���0=ja8&�#i�dC���"V���$btzX�8�][����U�SO��y�&O�s?��5s�������i�~q2]x��0,u�Mo��B�kT�\�H){�ǄEe��/�m����*}�y��y댣�og��<��F����QՑk3s7ߎ����q!�E�k������-O�����9Ռ��2s\-}r�f��XŐ�(�� �K��`�wogw�(�����l���ж�R!m��]'8��}�<�0��j�%�1E�s���V����U]�'g�xl��4L�����h��zY�8��v��l�޿��£w���lN{Q��*nv��HŒ7!g�7�W�:_�_�}{;�&�6=����s���I~/z��������o�>ߵ�X�V՞����*�>z5�N(ۑ۪"���RzBZ��f���\�9!����b�3Xr��9ճ$ÂO����3�9n�%kl��k3�S]>��m��KU�eCIJ�S�m�%�a�,	.1�����&���n�������*3SO��Y�p�yq^���l�
YBϦ޻���wŕ
��X��K�I7N,�zl>��������ms.uu��h}��y�FB�����;��g�K�@�Q7�k`��2c���VV7��.|.̅�678)�ay���b䬗
�m5�JZ r�AkH�諎�
Zw�^�^������{�m<��ɤtIvi0^����!�~-kq��'VM�<en�ƚ��.'��N�,�Q�2��j�	EW��>�$p�S�����}zV�)m�wd�Lf��s'�l<hĭi��Ȼ�`��)��
/H9�ɡ�~-����=��H��S��4��6=����g_�����U��І;�O��'�p�rrJ�l&~ˈi	;��P�E�c���Қs�&nZ��Jo�ecsu�U'M&��Ge�k�\\s��U�3r���ZU�ʠ�}f��\��w����7�{�p�_������S��A�<y�3�>a�L��1;A��)�D�0����R~��iqR9r�����k�f,5�p�w
禤s��YA���R<[ef]X!��Yt�����r�6ϛ�w���9~�Ηo��IK��?jyfVi������o�	��XzDc��=3vN}�""�EB��U�ً"�����0
���	X,8tP���w���}<z2�Zud���{
���g������a���F<7�,~����� q@����0���ꜿ����XM�{FuLF��K�����-������˷���y&cNiD��p�srrfk���o�b�C�����3���ڭ1��kv֊��EL�R�?N[/�)�q���Ó+���w�7�n���|�ё��B���z�f�e�J;8
�	��(8;�9c�cj��àz�Y1��M:-�a���/A+S���/_-Xxѣ��^���@�/T��V�p�kƼ�evzI"+Sò�u�����s�J�E�Ƃ�ߟ_�Ty�n�՞����<�.�Ɋ�e�1�;p�y�2��c!<ɪǂtB4�y<�8����qFK��s��&���6�.Ǯ
���l�u9±�ebW"#�	7�ĳ+T��]5]��ӻ���������?�Z�?X;���������:^�{뜕'_�r��wU	�=�=��_^ܻԒ鼖Ï�OW�_���p�+��	��i�~M�<���
��*7�G2U��r��H}�xQ�u�ai��
+{���͝����!s�ɔ�.��8MּN��\P��}�����ϟC�vD�ؖ�$���㌪ ���C/�
�Z敳5|�ܹ��R�7:;�Yva��~���~oa�9��-@�_�:�� �~�[3D���hh)�PM�)g�闬�5�k��-n����MK�����f�t��޴ƧEAg�4������"^�~����������������;	�"O5�
���c�C�vsVH��.�t�X��d	� �C�Eq%q��N�fqӽ"�a��9KV��(Ok�Oʺ��zmqK��-]{m�T�G�7��\�X	r�u��k,{TZg�����p�����R�����3?+l}ԯUo�eM�V]���� �R����=��Y�b�����������ƭiA��]�qi��VmI�ߊ󧜋���s,�&�K�	mF��+�����5�-J��q��Ujzf}�ϵ��d/�d�{��!Oۚ��b����l>4��av&�PΥ��Ʀ�6�I
����!�#\w+����qY%)�*Eb���)�B6<\�:��2�Z��*�sX0`�D�©.�T�0�>Ә#p楂��I�O��̦#�2�3&�.:3Q��p���'�V��lx:Jä�N`I�
o� �EG�YJ<L�^��z8w�N���]"�M����������d�fŮ��*�n	�}����.�l:<���;b��� ��;���p����%��,�ת��?���m±�O`ώ������m�Λ��[^.�X296��U-����U�9_O���Ɖ�kj�����]��}���g�Vz�W��ũ�l�Ö\������y�ni���|�����s�L}n%N�9�z�q���	6��[&Zk267p��,���lk��')�g&eSt�5�dRn�4l��	����>R����<g^_*|f��C�6.���Xo�n=�<�O,/��=�ٽ|�-Z&���l�/����Eu�k�A���(�=:g�&�ȱ��|�x�����k��v��`nf墅
�k���^�u���w��|�����������l��2g���@^����=�}#?���?�cV�<��wyS�&��_���v*�6�V�|�w�r`�u����B�'����u�&�/:���}�y�?����LzV>ۃk��t��i�s~ݚ�^%����Ė�oC�5z�n�(5���W�D��湮��Eˮ7��<��`���GY>K'T�7�2V�pȋg�έU�f�h]y��e�W��}pc`���`���y�����zC�]ǔ?M/��Nqdٝ}���k���'Nƞk����Y�
�M�R�d_m�~��j��Ucƃu�{��s�<�s���g��R����}RbN�Z�OV!��9��ۊ�%�>��w�Ͼ�a}G����WK������p��5j7x�gs�]�����|w2b��I?{n�U:�qs�!۟���!�����]-6{�"%L��������_�h���Rx�R�k���x�
lr�֊�7_�_Lw����w����Ɩ�4Z�}��W�^˖i�e��X�"ՎW#��V�_���_��6˟-��sf����ʱW^:��1�ܽO��+G����W��V�����i�,xdቇ<S
lY}U���v��õ��?�o)���t��Y:�B����fk��z������ʟ��]g9��B\OU��S�G'����va]��	B*���/���Z��3;꒷lke�rZ���v��7��,g�מ�c��ة��T���S3�,&&�I��t�KS�piP��`��>���R�^gܹ'z_q*��6����@M�Sv���
]�v���۵������_o��~���[rM��a��Z��v��q�z�CʣdC����s��jySb�g]6/�rQ�Y��g����Wn��<�k���꿞�0��Ch��kC�M;���9sg]�ޅ�-�
���Ś��)3�B��m;��g/�˛���t�e�Dե)��<we�:�r��]D�W;1UT�DqBVU��ꕋ���\�s���u�����zk��i��'[�]�y��Od���ժ��ms`�uA��Z{_��Xy5�z��Ȩ !UQ�vi�ƅ6ɓ�{�[�7�ख़v��w=�Z�;
�~L4�6i0��S�㸢��M�TC��=O��4
6���wq�ܵ�H���z`�Ռ�JΥ��LIӨ8ib��z/������g�������=o���w�6�_#��w]���ɷjs~��_�����/}��������/��!f�:�՛ɚk���m�A�Cg���S���Yb������*|3_�/�gU�'l���WF�:����[��wS��O����n�^�ܓ����VKˆ��_���λj���O5g�Zk��p;���=o���7g�z��՞�n�����k�m�"]���*�ؓs��v�����G_�~��=6�<)�=�Pɢн�?�
Fi/+�cx0ti`E�����]ny�.���:��D���i۸�Ym+��l�g�gF�0��+2���w����Z���M��
;��ij�_�0칫���׿��ź��&��?v�o���b��]����,m]�Z~��漍�^���@��3^�_���v�7z�Ԙ��N�ɰ��J�g*<#S��IA������z2�\k9���D�I9��������3�<ǘQ��Ӫh�E��1+x�=�g������$���x����E3�������J���(z{��l]�`��k����0b��0i��������ZVhU+qth�d�
�&��c)���vm���:Vf�~Z��u�2S\���4![�

J�3t/�����)�ܜ�%��^�L��۱�vm؋���9�ߪ�'�l���ڒ�^b�jn�X
��uk�|������3t=�z�'����[��?#����|_ʯ���M����m��3].;O	5+�:��)6�N���/��)���& Ħg�+Y����.K�˲ni�d���$ޱ0�T���yYW�Wy�➷����I
=5?[c��m�bǆ��T5�+W(܈��C��6���	�sR/X���fpM��w������o�T��|�}�����	�Y�+J�Ee�EP��NCٹ�tN=Y�"�t���ɮ�=�uW�d���,s�جr�2�3���]���|��{�;��T�����r[W�ɦ�$���o=^���*v�����4S]�T��gW�y�����̔��k�>�+��v�l��uS-]��j�]ֽ������I55�������ꌦ������Y�[���&�QQ}4�j��^u�pf��+�^0	fL�\�-m+�~�5�D��T�8k���K���X�@ ��ߞ/�g�O���Ui����`�Ζ^�W��1[�^-?{�dG��Z�]3���Ns	|��2o�<s�K�n�n����������N۳��������
��U�q�B������E���^Vs3����9����Ώ�u��}��K��Q�U>����z��( ��ƽ����;�3PZ���
```

---

### `objects/23/3f506a1350103a1b7c4fe1af56fc9dffb9c2e2`

```
xK��OR0372`�����`���V�����(�+"���,!�����@Do������?V�ɓ����C�m�bv� �\��{����{���]\\\���Ow�-���������/����/..~����=z�xl��=-.R�����|��?�����
�����������EE��gr��,N�3�\>�wѼ0���
�]A�Ѿce�8ÃaN����y|�Oog�-?���*�X����$*R�M�ұ
+XXR|��9�+W��L���W�{�G�t���2V�N�����ӫ�-.�PȨW˚c����y?��:scW$_��������U�	�v�@e���?�}~��f�1y󥵱}��J�)�r�$S��ɢ��&��f���qI��vn�k�WN�7��}>������G�gf0���i���"�w(�K�$SȂ	�8���W|c�ʽ�����K��Ǿ�}.��ez�wõV��]xy�x�֟���|β��*;,�7Is�����$51�w�K%�u��*�s�zƴs�f]�e�k��6n��nH����-
ق��r��񅒙�JSE��Tڲ�ʴ��K�f*�_�`�.�T�6�h�)U���o�Q�j�_XGج��V���-泲Ln�~u}�L�,�u��pN�W�ǭ����f�o�sS��nN~���j�֜�?���2�ܦm~]��k���s۟����4O��{�ķ*�r�֪��_u9�j���w>��2��ח���7��Y�Y�~oɩT�}$CdO���wM�s�:���y5n�E�o������d��|�JQY9���B��5��[�����F��E��0�0\�pG_�T�q�9���Y�/��*ʇ����ep���/�������d�9i���B6ֿ�U?�ί�t5��9�������+`aSK�օGz42Jb>I���������)�2��1{��ĕ>+�k�kgNr���qٔ�X�-E�
����������?�bg��ܲ�5�i�ӣ|�S���Gr�;(}73�n$q��~I�5fo�܉c6�c�o�z��e3C����47D.�U�x��Rŧ�p�k�\ŧ���E�BwMֿ�JO1����W<��t�o�I�f�)ۼ���:XbÒ��}���&��E-����������gF%۷/_�|��]��_����i]�r�����v�{�Q�U����J0$��6K00�(s�ݔ�Խ虊A��!���s�8@�W4a�axu��{�ƀ5�+`�[4c�,������ۇxHM�^U�wX�s����R׋��)ݗ*��G~���z��R�V�>���랐���ך||[�[�0�[�r�%��
S،κ3�[�U7dv��/v�o�56f�4�8S#�0H�D8~�W됖�>�x��_���h�\�97��v�cb�;h����ଢ٣����Ĕ &���մ?U0�9w�}������������
B��p�-Sz����f���/
��n��6u�M�MR�^+.=^��h��@����De�c�+�'��C�&�[�5�8���09}��?�3�������/�Jxh��֙�>���6������+?7+5���pz�Y=��N�C������b�Ks��̏+���c��
���r�6����*��*@�gç�\���mӖ�X嫺V�=Z�r���K����|���[�q�7�D�E�tW��"b�{�g���>�e&%:Į
^y�����ۯڞ�*��������9=?_9��zU����R�3/�^6φ�
��77N\��Adk�����&�0�.-�L�p�\��"CC�}�����+������kO������g�W@��W����ߝu�v����yܛĺ+��h���]������1n����8��x11$��lxp���s��]�>Vx����!������֑P.O���&{���3陵���&G&l�3��0<"�5:h�\�I+x��3��`���w���u[%�&��*!��jY���Ӟ����m���)8K_ZJ��i����2J��OR��T���Ϋ�&~����^���?�j��lSS�u�E�V�_��������yg����������]mOI��_��w��'�d�e��/:R&˨̞,��*R�#)|��PρO�����v���v}�y�t�߈�����������wU���X�3���dB����M�^�>)a^�����|km���I�G��zϾ.j�=j`x7mǮ���7�����o��m����k����������2�jWE�_��9>��3�*.?x���;tj��C�RJ�/;$�x�D{lXrX��LJ@���+��Z�-^ɺ�U����A7�Y]�X2š��Є��)5����4��mqv*�v:����+��|Zr���ͯ�J�����0(����뒳�f�^�V�E�����XJ?SԂ�0����q%�+t֝�>�SN�+4TD�H����-�1����N#�NC�kKr
8�y�V��kz��d��o��J�������������ؾz������ץͺ��)n���x�WT� &����g+���=Pm[�������{,͢8<*&t�F>�������[����O��3e��璭.��W12��/ۧ3���
�������͛�i ��qo|���ml��61�3><��]P���G���UY	��*W����[z5l|I����I�-	�"�^�7�<�\ԺKD���H��U��H�R��YN�-n�������������~�OI����jvU��Ό�1e�Wbx:]��w���p"m�9<Kd�J��S�,�̒ ��x&�Y=�V�����U~�k`x*�#z���+�o���}-}:����e�+�>������k뢟��ڽQ�J���
������9�Ͱ���}G���ń�Eό=�++)��)�\�L@�IG���I�5���Q��q���2ǥ5W.{N�_�uzmU�������e��%�!��7+qf>Ơ6[_-5��eN��n:+'o�M�4�`�bf�����W:�oU0<�S#�*����-{��:u/��;�w��m��}^}g����U�RjK�[���.��z��3�T���Oʄ�;6Z�%+,QwMYYs*���h���ӧ�NN��gRƒ�/g����U����W��f]Y�s��������m9���`U���+�ZtD8͝<�z�	V�W���4C"AT��w����O�D�3%)��
�M�z ���Yt���٬\J�5fO�;��Z�>#��{���u��l���������윶,���ͼ�VF_�{x�sPGV���/��kp;?|�.��x����~����lK>ٴ����^�bȼ����e.����L�(�q5�tk�9�����NO����l�wg�W�wZX2Y.��b���V˄�g��M��H1�Ip�0���� �_���gS<�ZW�ِ�TLL�P�3������Ew�/׉�>����������\��������?F�5���pY�!u?/Qg�盎$�6:���ʢ��s����|�3Oe�cM��j�<��?�p�{�������������f��t���ި�����{������l�Y;�������4���NclOcb��j�j�+��q>�%���;:���0<����7�E*Y�!�����Iކ���}Q��n����2�����~�����F]������I1ѫ
W������I�x�7���EH�%�y,B�O���igU�g���Ig˳�:^��Y���y
-S��~�5�u�fz^a;5��S�̲�s/��Mۼ��_�w��}{w��f���Ӗ;Xr�[Mʀ��v�������0<�s��kW�H�~�&�����C3
lr8��`����ٱ���cm��"S����
<3�����κ��v��[��?
�j�{0��̞�^*m�V9�oS�b���w�7ͽ��gJJyr��w�?��w����{
��O�(s�����ËD�v�����a�``u��F��5�&�ˊs�ݘYulg2�,a�����zջ��a;3�b�*$��J~"qC��ї�d�Ec����ݲ�����z�
֗��u���#5%�b��Y���4�^�U>]6O���#=	f�|V���66|�`������᯶nK~r!uM���忴bOO9�����&���04]̚{���%%Q�3�$Z���6h�<��8�'��I���ō�ez��@6�[�]���z&�����������?o�>����گ��K]߽T��U��
�ś��L^��PS��cI¬��Wm��3k��{&�\�$��+nOU�Y|�tf+�-�5ݵ*+u�b]Q�%[�=V����o����mߋ�Pg�d�)׬X-Mu�^>�8�"�DLh�NCnC��J˄b�y��sn��f�Z��sr̤�~� ��ә����Lj�æSm#��h��=���S[��*�.�|�S��ٵ+�ޕm����?�e�$<K�Jv�KQЗ5���Z�M�ͻq��'��E�B�-��M�m=��za��J=��Y1&3��-���{��R폂�}
f�|���r�����̆G9$�gux�õUD �Y|����R<����22o�H�8`���W���6N�#sx+�-��S�
�5�w����*ڲ�ߓojJT�-�=s�}�qz�򷟞��R�Trrpt�ڝ���+�/g6y/Y����]NS��F�}�"��A1�^}{%����I�z��b��<�����$:C���wewNog٠�p�=�^�?o����" z����Ym��\��t�˳?7{�|��%��❾L�.VvE�ia��p֫χZo�ݯ��ˀ��Τ�[�����Vv۵s����Z[*nX�]v�����I����[,8�q(!��HCgP͵T�5a�!�-l�N�D.�I
+Ŋ�HK��i[U�_�R�:���N������Nʆs�od�eY��i�My�f�WC6����g��~���X�����Ɋ�=��*tݿw�a����̔`�3/l�C~��r�3�ۯ4��U���K���ޕ�՟�q����ӧ\�5sU��M:{C*�ؕ`��u^�y�{+�v�)UCY˴�_�M�����~ы�_��sI���)��M^y?0X%:54O�����v��3kѝ+��䝽�[�S_�����M���p�]k��.��4�%���K��O�i<T
b�S
ڷ%����ݓ��<5z�{w)�\���:�M���R����i��s^h���h�p-.[��e��W������8�֒Uo.m�,�r������~�QgS>JWK�Vj�('��sO��S����{�t���5�k�i��s��܇J_�>Sح��uv@l���Ǫ���$uvR�g��^s�6i��캜꛾�ob�� �� �evG</txN�6��%q����pښݺ]>�;�.���k�pk9(����(�0�+�=]#&����5�n̩y��=o͉�w�jM�ԝq$P�8sS�(�i����.;Wo��2���jV_����[7���=��o�}O��U�>�|�rŽ���-����Ls��j���5�W��<r�ȸi{��.M���R�B���Y�7�3M�3v�<�6A��#G���xe,�X�#gcᢪwأT������L
��v{M��+����V��)�;cÞ�J��B����]��D�x���(��p��0;�^#K��V~�i;��g=j\n�>/��Y�@��L���Ҏ���_>L4��h�'��h��o�����˭�¥o���Н�����mw�,���*�w�kzZA�6m��aڝ�����]�t����KW랶�z󳲖ۆ;j'O�lQK4t�p���q�/����w�������/���v��2�t��lUD/�����y\�5w��R
�Q'U��ܔ��%#u�ɹ|<�qI�����V6��6]Z�����l[��,S'�{y�߻XA�#��	Z����U���ݕf[���l�����tΌ�o��y��ɗ^(�?�����96&��7-�;�wo�$�s����'�ֹ��LA��"� 7�Ęc6	 �?�)���p��s��\!��&{���\�zcT���G�X�'M��h���^���S8��6�'�n�[+���0�
��Y�Ǉ�~H{��eƓ+�
�$0�d��t9�O�`O�
�c�Lʬ�m�C�V�{2F-VH�{�Yv:��sݑ!�E˶�(�z�S�Ͷi�u�.~Y�������͗��v�)��SE����e�FE�j3f��:�-��/�j0�r��.���S�֬���rW��]s������,5��?��~j)dt�2n7����O��x�jU���u��_��<�k�>��I.�B7{LtY�=Iu����8����8��u�
]�X��j����9��
�B
�B�e��1��q�u5�340%���Q_��(���"���� ��000{��`p)�� �[r�
```

---

### `objects/21/ab51d87f02cbd36cbf349a0324e124a1d484d4`

```
xK��OR�402a�����`��oʒ`��٩���u5��59K.���Y�h�Ă0�M>¢�
|�8�h�pqr^\��+e�qR�`+��bw�u��-
��Lof�\�$��$�$X^^^^(((�����8k�ػo��qqqIQ��ݛ������9y������zl���#�=��?�1/�7�\3OQ����Yڷ���z�=��d��}� ��h��P9�N�mm��Ζ�k�o�4J>���Cqz���w�s�|�����m�?ɷ�p�~ű�=�xVK��G�o�'�9H8J6(�w;�%�!��-���,��'�����2t�;(1��U�w�b��,�oR���\�y�}�h�����7�p��u��_ik¯+<��=�U��ٔ��S3xn�-����.�֥	[~�r�������;?e�%6�ڟz�ԯ%;�}�j��cY��i�ق��}&���Y[��eR>!1o�͆��'�+g��)�r}[��9�K�d�T=u��/Z�9�Y�y��}N�.ɱ��+%���˘��ƳR�딁�Mۿ�>_�T_��>�چk�?��j�BL����_�s_j��5���J��}�u|٦����;�VV޿t)���Z�:4f�
��P��K=sN�ۧk.�Uoκ�\��w��]�}��ϭ�xh�rm�{�]|�Y|5��e��=-2�^q�	�V�\���c���G	�̍R_�=��a �� k m3G��!�M�q�Vn?��r�����>o����౟�Ox��t�_��&J���q�.j�s����ѿf��[oy�H��DG]��v��x]]���� ���<����wg�鳣���^�~V���U�D�U�y^K�z��W/��,~ߚI�{6�g��|�O�T�i�'��[>��cxi�Ǚu-�d�k�<�����D�ߖ�ս�\�f�g&��Zv==zjY���Zl�Z�	�t�Sa5~&q�g㉭l�!�/+������R���G��߯6XUv��Y�{Z�w��������UÛB�i��$E_^�r��^���yw�_���'�v��6^s��w�s�mg�6�ػO�7��~��+��oEive�:Tx�h^���o[>=R�3�]e򔪿��z��,�uIU��o�7�i���3F2N��g����Ո������'(��ج�9G�Ɲ�n}n�eRA���E�~��ކ���^�r[�ʭ>��E篷�
�X�_�[��}���)�&��"߿}r��r��v����;^������o���k�j�\-����������]�^7�}�������͜�_83a���K'��	�x,>ڒ �����
�ֱϡ<��~��궩G.7]����x�Z�֥���9I�?m����S�ӧ�~G�MBS�?�;K��؄�i^JT��Ю���g�V*�o�}��Ut$AQ��B��%����2׿����b&�] �K�X�a�wg���i�����ݙ�P������w��}x/����G7�ٚw_c�sy��_��uvvu�˭�î��:q�q��c~����&rP�G�W���9i�p�y޵�=����3�?�{��o�W��LX�{�Fܭ]K�_�~��,Ҭ\sA���e�?cm�χ�5�;���b���:>C=_�i��&�Hh8��y�p�6���Թ�4��������n�8{j���v�2����JM�~/Kb�C�,�:�y�������`�Gɗ����<����澼�������c��OY��/������em��n�o��l��3���uC��_[c�b�c	Q���BZ;J�,�mo������������K/Z�l�S&�����o�v�f����[U3*_��^
	���g"w6�Teݽ�1{��-C�m��S��éM�'���pY�[�b�\W�e����UʢfL9\y����k���ʾ���Zu��˄fٛt�`c|�%d,(�%+��tjUˑ���WfF�*�������3V�tL8������^�Z~��\��U�/�Zj����3ٍJZ}�+y�3h�����.�����x����|����2�.fon�ahZrPWV����AZ>�w�58O�:�v�<�̙V�Lo�mx�������n�R���X���*9��eM-�4�<|Eo�y�N���4�iB9^H,*��g��Ea͗\�|C������k�5]|�mw�i�)�t빽����ő�5t{�Kc�,���R���f���j:\��:'bu����q����6�ު���N2��Jj�\��옶��9�%��hV�|����E7��83)Nzu�̸�p���������э�P%�4E~b�ݹ��%�ϝ��x�����ԼG-�%N8M���a[�]�������|sj�窒ޅ�oW�'��|�9�c��K�3{v�]]�L�ι�V��2k䷦�`���=W+�>���b���mu�:Ry^ڧ�{�K�[ȩ�q�Z.��]�zA�Q�5����֯���y��滩�����;�PŠ[����w{�^.��z��d��R?�=���;�J�8�p�=��Q�����~�F���I�����j7h�	x�%�j?G�����兑��v>�z�0����{[��?�q��17*~$hiY���������&w���o�J{7�n���۵g���[>����{�C��-d�hv7YS&���� ��9'��
$��.��i�C��	�M�-g�����b2���S�'_������N���k~�����Ml�����M��ɼ�uΥ�Un�:~N�u^��"$�����������5��g[c���'��l\3o�3������9���w�њ7N׿��^�d�c9ug��
5��S6�[�s��X�����S�c��p�l\�V�����j%V4"������t�}m��ͻ��̻;�=���O��
=ǐ޾&G�c��O��XY�y������j�/��������?H���_ZUZ�庙?g���/--���s-{��6ܼ+���C3oϿ��}Wh���������&�v9m�x��!˔Hm�uʋ���i�Դ-Lf��OT�������-ٹ�������o��as��M��>Qf�� �7��1Z��qw�4��3K���Mu���Z�|�ٰ?����R�6V�z��1`c0������|�X�{�#�E�ṷ�OU��+Tht:ȷ������~m�+G�o}�e___�N
����)�'[ܮ���\1wS������IE+]u������y�~*o���<�V�?��l����*+��k���|N�ڙ���,���Z��.5� ���M��08s����T���dV
��'$R��,�֜p���ĲoVq��b&=^r��|8.	�[��r7�\��5A!A�+����s��O�̍o�6;�,��.՗3�y�(J�M�(���~o��i��r�r�x\\�Uھp����W��6�g[Ӯf�a���u��VݲP������.�\�8�)k&����C
 �o�J|T��Ln�g�.�*;��)R�nj<�����X���1�X_R���.�ʜ2=��)ɲ���<�kY[̖��N_�KIy���rb��Y˚�6l~�tC�C����5n�Qo�E{���yu�js_���.�z2�i�Ѫe;W�;鼢��EF�yj��o�L��ϱ�������Ͽ���I��d��,v>"���j�u�Z@�߯u�S	�3���3'�H������fCPR��A�	gNQ�M��=����1oKڔ#�'%٧T<p��kw�m�}�܅��OR��љ��z˖�L���ȶo�1�uqZ���ϩ�j��E��)��ˣg��]��R����|NUMط}Z`�Tg��9�!��f��8��Ab����G����3�7o6K0d1�a�����z��g3t'u���ȵV0Ĭ�Ç��N�t\d��<;n�͊��
�NL!�O?�x�$�1����i����߃\���E/f>�M��"����d��ow�9Y��(є���R�7��Y����v�Q����Z�>��M�Z���ŧ%��
�>��ԍ\V^���u��C@�,�F	�[
�j�_��[]:������f6F?U>�˼��xt���		v+��Vz�q^��`uԴ��{���筓�W��#�{��ˮ|���?'���zN����氲�u��P
������i�f�e��ϱ//
Z��h�F'�}��D�W���7ݵ#BmCZK��;v��ܓ�΅h�P�[��\�d�Ƅ�+LY�z1(�X$����� ���z�E)�����xB�!K�p¦C��Lm����y��|`f����q���!-��U�;"v��*�j_����0�Us���<���z�l:���/��Y<�S+\�9���m�5�����^y���|�a�M3C~
����p$����p�M�����Q�z�ٮ ����\-~|,g3�����
r�k]���|w�b��h,|7QБ���Y[�oQ�]`ǐ_��-�I����y���Ȉ�V��3�����3{'�&CD������]��/;(��ϕ����0��CE0�馫W����tC0�xG��Nm�(�x�V���?XLf�}�:��*� C�3&��ٽyM���Ֆ�5�j����-�ç5a^���z�+Lv���Rk�VÓ#wW�
�iD��qRm
Xz m�%sX��Q��}̎�_>tg�������}���������������qI^J]��JµJ�9�	z�X������`?��+<��m��`W��I*=�F�ϝ�xݔo�����!��Vd~�쑵m�J~�"��� 7N��&W�fN
k+gcb\��&h0��ߏ"��	]�K}��*/�5�$���C�"��ݑ�Yf��b��wZ�Sa�1���I�kO���]4eE��	�u3���r�	�>�����w������7|�����d�>�:i4���@�������}��:�/�ײ/lH�xy�K��Z���8����6Ls�!�e��-��v��*���pʛ,�x8�!�a�WS�ci�-}�h��p\6�X����G����L�sW�3�=�Y
����d�?,�:%3�MA�f⌐S�d����{��[�6>ps��J�I�I}ф�;������(�p�.��Z\%U�%��\,xa�������75�O�DT~^h����X=E�R��󖧫g�M������ĸc�B��}��������b�;����u�W]Z~�5K��sE��]+.�*���P���x#<���l���{w��6-�[��~y����ۭ��=t�i�RQ�C<���W�5T/���]���^�ú���w�;�g��T8�[�ti�ˢ��kbop��:�hUA�Z2_�Ƨ֡�A�y�N��8 ��pd�9)�Y'狙l�o3�ݱ[��;S���vŃ�ﻗ+�*��{�$*us���
3�<[���V�đ�ӝ�?({�\�׷V��=M���92O���E��=�������V�:�
]e':����[����O��]V�Tŗ�O��e"�Ȝ�u[����/ۨ�᭽�˵�Ϳ~�>�=��lNק�r���;���(ڷ����;/o߿�1z�u������s��f����%[C�ϕk��������X�;���
5n��[y����e&��b�_h^{�r������{w�=2ǰO��+|Fk��:���ft��D�劑�A��7�b��GZf��l��O����J�̥���o�Z�gŕt��XQd�h�o
~�K�ݜ��6%�n�T��fW�+|�s�u�vn>�i�=7�Чn��S_�k4C�u�2�`�g�ĝ���u�M�~~��in��g�wk�$-���߽�ƪ�g����O����qe��Ŵ�X�0����۷t������Z�t�-���ۺy_�q�(�,ڝ�n}���vA���%�:6j�N�x��9sh����O����HV9��G�=Ϧ6Mk�U�$$n=����m���u�<������/ﳚ��o���w���8�=�R>��k��r�r�d�7>w�fz�.�������b�˧�k����oɜ�?{���{��{������Xu0X��Ioqu�O���d�s���O�Lc�|���P)�&L��h�Wo�˓cu�8�~z¦���B�.�m���9�9l��Q�c�����L�q�+��Y�Bf�Sxxgfai�g�
��
k������qޯ軏���YiU���^����Ǻ������m��S�����un�_������o�$���?����߯K����y���o ����XM �_��\��ܭ�f�,:c�ǩ%e�`(�)����,����;U-��J�gkI=����ᡪQP������O��"9b׭^�}����_����r��/�\S?�7Va�������|ầޝ}v�de��_&B�
w����}�˓�%�������w���_��K]���_�]c�5/�y�����e/}O<Z�:}��s��s�*fo��I}���yw8���y�%qLY����,ٓN|�ˌ���5L?�N놀�993۴Re��/�V���� _�Pua�跟VK��ɸ����d�[��=ᚍf}���}]�������n�wo�}�5��dkx���y��_9���o7�O6�pi����b�K��X�麥��ъ��$~J^����c�S�"�7z
�̋��(�f}���0���wc=��;+a^����;�����J��XV:����kI�7�켛��v�E��ڗ�u���-�U(d��4�޶���K���fHw���������^�����t������~��s���Ē��%����jY�,22��U��p7�عp���W0}��hK�K��Jy髢��u���漵e��ɻ�ޮ�{y��)��g���TC���qE�3VfTm}���O��M����:�U���B���2#�]K���L����ھO�Q_��̩�߭���23���,���-��9���5_V�}K���z��RѶ�'nUݹ���̼��'ߺ$�������MIF��mN�����i�4���6_K�}1g������g���}��:�������ު�7}�oq6��h��o�U�-��L����w��rv�U����s�U���-Q�l2O�b�[��͞�+"'Eޖe���c���ǹ��e�}J]��rY7k:o�g�%�S����tQD4*Sr��^M��L��Y.���d&�8�(�̵z��Y�v�ꥪ�l���5g�.�{k_����>�6{_��`��"�3��C
��>��5_۲D��j8���ܿI��)�*��ʻ��_�_s��ĺ�).J�Z���'�]�ۯO���Yg2M�'g��5mټ�Sq��w�K����m�E�²u*y
�lϺJ�I��J? ����c�D���:�9=mJ�w&l
]��ʔ������'�[��$oM5J�3t^�q���;A���Ϻ��g8�ye?κ�r���ӫ��2��t���R=�N���J�������p���u3���&����\��rF������l"��W��|g���=U��*ܻY9Z|���)�VZV0Uf�b�t��sD�'������m�4�JpZ٦	FWV������B�>k�E�B�O�.ѓؓ�˵5�Z�vԛmL�מ��%��GŽP1�ȉ�"�K���M��u��d��c����jyϲr�X{r�"�U�@�EJ��`�]Cg	cM�R�]���<���kk��������Ż�k��LW۳�m���V��j#�o:�Y�B�]c�J7�O���w�^1������w�V[?Uɢti����ךnF�.�� .\�I���m<WѴc������_8���Z��O�,�&���^�~2AF��w���}fXt/ڠ�>���+R�J�U�C�S|ԧ���S�á���m��L���F��F���o�h��E�iw�BV<Q�T�I����1��q�+���T������f�"�������Z!�'w�&�y�
J+��r���+��E�
�4�G�h>.�Dz�G�y^���*=���vn�w���7km��}^吲r"oWJڅ9"�.쁷YR#,N�����l��a�4��Ҟ�W��Jd:�����2J,'ܽ�zV$K�K�ۥo��e�"?i5���yՖ�_������ui���SmR�i����SfsL<��f�~�6.��Jq�m��]�
�ve��3
3�����3���K�˱[n�:Yl��|bJ����������ŒX���M�-U��y�|�������Q���{�J��T���7-�V��qsR���7�V�2q9�
n�r_r�7��/���޾":�h�J��P�g�O	�܊T�ꙸWȄcU�ɦ��goީ�Mi��gӦ{����4$��9�U�k�b϶�ҧtyd�G�䝨���1*�����ĕ�_A��vN�-��1%)�v�R'V�E�x�DvN�yR��3�xDy��9�ƌSw��RO��zkɡ}?m����1OJ[zn�:j���:1��<y!k�h�ܥ�̄3���zk�0\��fs�mM�VY֥f~`k�zs�om��'�Zψ&��?��l��r׏Ł��k~����g�J��{V��̪{y"������V_���]s�<��Z�K��ٽ�K)����k?,�l����̝����^hH߻���S��ӓCޝ�ܪ�������l���Ӳ˼&��r����IW���I��V� ����1��p�箑w���-�j�d��/:L��nlZ��4'�u�)LW���TS"�T�
yl�:{ a�����VLT2]6QyrO����kkkV͜�;��qV���=��K��[Hu���s��?kl-geX੮�o��劯�ȧ㡪�_�t	�*�X�r�����1E9O����cq����Ñ��I˹e5zۏ��1�����޽���O{L0�2�ec�*�ğ��UN**8$9�+l�
<:%�uJ���ؒ^�M�v�\�VVVV��{�����o�Νy�߹3��s��V����y����+5���YJ�������I5T!�q����&W}}]��
B) �?R;uW�~��H/ =x,
```

---

### `objects/cc/745a32d672ade05dbe435686caef93919df525`

```
xK��OR07��`�����`��%	0���Ӭ �5���G9����;uVJ�)���'�&Μ;����B�YD�M/n7�=�"�A�Kk����ߕ>��`�����7�.Η}�ֺC�ͱE`����3*:9�w�oO_��DG_@L��{;;
x>���Op��/�m�/yd6qZ���]-�5�ΰ���o������]ٯkǤ�������D��K��9�~N����՗B<'ݩ��'��Ё���[���n��.x��y�M�Q�����~���+�e�#���
��z4�:w�s�Hz�ln��r�r@c�����.�6�
F�B~�T����T���Mr3���G<cN�ѩĲ)�*n��b�X=}+o��	)7xe�^�6E���W�s��+�g],�Jq��]��}��ȁ�E_���u��?uW�@�W3�1*a�w7�ܓ���u{_��u�xg���7e�[?3G�F�|߽�}�����jm�U����X��O�o�_w���8w�ɶ���Jl,�%'�H�:���j������F��g�yt�L�hu�Mq���T�ɍ���L��8�q��~��/���*E'�t�O:V�9^�x����~4���i�ZT��}��/�n�jZ�L���Zr�����yw^M	^���kr��ֽ�\����R��4�_�f׾2��zh�Q��/����B�Ug�n}Y�i�"ݹ�7�-rS~37�5�n��?.'��E3>G���f�[v����]KtU����{���J����N����*L����$�	s�J�Y��,XmcS�r����dq���$j�gç��s��<ϰ�,?�*=��t���tm�&0h�ݙ�����k�������5���;�j�~e�Yw�ȷ�����_��񄝐l�X����9#_]E���P��C�3���r�x����7���>�u�OD���?�}����W���ݼ8��9�!��_w7}���-����c�-�>V~ڻu�򟗖t�{��ښ��F�󄠾�����Mw���c��ȫ�ײ�?�r�����ywjw�������{��{kk�?��}�W����;&�L��G��O��ˤ�!��zƵc��Z�*W�˯�vjd�X�=w֑~�*z�JW���o��s_3yoo�����y�.QRn��)�;n|ML��</���/���+��VELt��l�����s�WʎO�o���~�t�9��>i�r�]͟%u�WF�<X��U���s����A��1�?�NM���k�����_���h���k��t���ʬ_���{�~�����%5;���ةO39z�g����q���=�?�h���=����G��zW�
���n��<����ge� G�<�9,/=U^����c�Y�HY�mGo5~�!��z�1��)�,"J��^��o{.���i���Y���&gr-���uvͲ'2�_� r�������{wf��\w:�Vf�����^p�s�����׏v��=������k��~��},��]Ƈ��r[.��d�K̜���[w�7]�'�5�����_0��z��x���ʲj��aw�L�[���"\�}d򪜟�SY��1Li^�xo޾���V�O]�/��#�Өz����&��f��p���3���_�v@��MW6]�<~a�v���t��Ma�|��y���&��ca������3�>�΍�z�&̬�M�G���gȩ�
�/��v']����֜d�}5쓳>��}e�����g���������ޗ�|�}��I���>�Ͻ��O}~�V��䳱弾;yW���V0����5�j��O�9��Y���O�î��/]�w����>ݗ�{l��FQN�KgN~|㠃��Kg%�I4�zr����RóY{D�gk��0*)pX��z?�lFV��{�Ml/r�;*;�bkn�<_w1��o3�tW�^�bT�W�Ym�-T����5��|�+�q떆�|&g'��3�<�6+�g�NW꤆މ��^V:�>a����Dh�E��n���J�� ���<�,
���꯯������+�Lu�,[�X��\�>q�a��@����a�weOeb�Q�;��ד�$��d(�\!Xqַ�o��,&���wu������j�af����{6ml�������3��c<�l�'�hu�Lǟ�Y�z["���~��;Kg��ꄉ��tl�g,8������ �^�jry�{��9+�Es���W�uU�p*3��ɣ�3'Y]������c�yE�~�Oe�r���&��{�fd���Z�}�ۛX2CS�ݧ�.�*�g�z��s�����������u����̛�LԘw}�� g��˂�]�E&Tގ��+���mgᓥe�I��7������u9�m�l.>
rt��;�g�<�U+�&1�90��\|(還�����'��	K�Z�E_)cH�2����m+��6ˤ�?�U&+?}�C�ۦ�@�wV�$W���ƌ�����_�V-�75۰�Gz7���)s�,:�|}���ēo��]�w)�������z�������f�\�ml�|��҅�����_� ���,כo��y���I���³l��e��^p�1���P=+-�#���zY�g���ֲ�]�,9&qJ��Q��E��R�k���{﹵���k�y�&���ȿ���(��F�D�h4�I���]������_�\��z�n����*�Z�/�n_ؠ/������O���?o�ZP
�����5-)ӻ�4܊����tL��=��([R�	)E^�3�,=L	'>D<�,x����t�(��@�c���"gEEs�Y"���z�R{�r�?�-�lszft�^w��3bd�ql(j�g�;�S���\� ��wQ3�
��v��#gxM�1�Md�����e1��2��g*��O�v�܃3"�!���fk�40JNWh\˴���c�����g]���РΰB�@��PE��h\���4>�"�B�٧��6y��(�P�+cЇ�֤^^QG��]����`�Sxa�{�݌^�}k��5Ę0,���(�-w���z�أV�j��mln*�����I=�-��]����������}��!�c �>\�sj����E��2l���[X��;�xϗ\�C-3N$:�\��l�C�U�������pr�!����47������m�j�l�

&�9�6�۵z�7���==5��$<�X�_í*x�Ǐ?~n��q�f䫾$)
^��E#��8���k<S&O��o������� r�t��_��f���W���E+s��#
	"",��2?3:9��v���L〻��v~�f2�
��2�1�)nkL�6`�q��������ͬ)im>�-L�=�]��0}�3S�YJgh��u����Zyb�����KESM*���ܼ]�fr�1�`P�\0s�Q!u�i	��'�.إ�DuF������>
����@�_�z�[	�3��F�����Ĝ1�|�i��")E�u���%1��.>�'�xfp�,bz#yf��YNb����w�Bk�/0����X~���y_hZn���7=_\_�8h$�n��������������\dZ�2�դ�%e�u���5,�Ѹq~�î��龿d�\?�`�`���Z����K%x�A�� #}���C
S�������{^3�0+=[{��m�i�� f��Ǻ��0�ߴ�a_��ꀕSC&����~���������������7a2z�"J���h(�˖�J}���۵H�#jg�g~�c�'5mv�Y�7��T�
���jE����.����$m"�ȕq.m�����MgRX���dq�F(_TJNY27����vȊo�W�q��������g^{��>1�l��(:��e�Oҧ���Ҧt�������W��|_���._z�zc�`�ņO�-���VNJJ>�ָhY��W�_���uT6N�8"SsE#rr���B^ba���[K��8'Xlz~�Kuc���J"Fk<��q`yr]#�"g�sU��[',om�n� �������%��v[*�_!�.�
���:�����)Z�ɶĝwa�I���M~��V-FU>���Cj�]��}����Y����������}��'��X�aۚ�W�
[����qO�x�������~�\�o�1H��IrRp��z'��\�=�����
�rO�Cf.l	u���5�O�ā������q��q�ۘ$��Ȼ��C�t�#�bA9��˄#���\X��~}��g}{j�ń�8wl(�H^���Be�$ײ�
I!z:�//����qUֲ������9/������_���VK�屳�3�u�z6?.T�,��{�{&��L�
w�-�eMk>�𔨘fbb �Ri��/�
g�h�*�E:���59�6���($��q��p��Y���6��l�.Zݰ�I��ú+L��_/�Yr�k��P��m�n����q�4Q���}'l{�5��M�81�/�f���O�u������o��~�������w�<���=cEQ��G&Dx\�����"��g������%�o<_4/b����ך'�7m���bS�p�w��k���m�����D�!��ł���'0��r6�^���頤�3�7G�����y�̅�&v��R�5w����������{~{�y�p~�#T5C��`�na�-[WMi�ƈ����.G��y�z�0�=�?�?\wQ3-�ۦ�+_I��D��{��5g��	wVe�5ͪ�������e�}Z������:ӶH�xb2���"��m4d�����$�?�j�*�3��G��?,�t0��k���O�j�u2Ǧ���Y��DZ�"y	�#�L]�x���E7���~<q/�{pt�wŹ�]������������.qP�����%W�~=_(�v����i�g����Ξ�K�B���H@��j#�u��m��͒jx�s�����YY��8�Ћ���N��j�q4��z�%��U4�.,Xt���.C�Н&�-z�u�4����"a�|FmU���(`�����s���R�v�.�*��?j����p-`����/�I��M��lK��-u�o�ﰜ+�[�K�p�>�s�����ϣ�E�D��+7mv�^�^6�rѽ���SOj��P��2q�2G���fE�{��<5���ISTT�������yBLs�簲�d��-5��S`��u(�}���B��f6�GwGk�|��{
�ٕh�ӳ~Ӂ��E�r�z�i5C6�����?�d�p-n��-Mo:r�O��h�g^��+|lA���}Ѧr,�fvι��}ݡ��n���s=>��m�͜I�O���n��h�[(Y���]��^p>����e?�&�*�f��O����t����?oy����'푷K�͹���3~OZ�#��mX�I�e�¦Oo.�b+���-78��]�q?�çt��%����&���$P�r�{}��$f.�x��`˚����ўP+���2\��ʭk99��_���������ڻ,�L���~��U���\|DY2�*��˵̱�toO٤���CE��'/��3}�_$�-�w�{bϮ]�'���̴β��!��������[�lcw����Y!*�}�U������O�j&�d����xzR�ߐ��o焪y]��bZ��� �?Q}xπ����\Ӛ{�O{�6U=�z�ي<��&O�Oj�w�ÔG<YRϴ��Wl.��t[kӝ3�:͊�-��a8y�{̄��+�m�4��L�ډo��=Ύ�3�����r�\�'Y���=W��5��xW�Z�OOu#����+C��m�BR�C��'Y�;�sC�G�罢�Z^3#X�	�v����ӳ�_�~�M��?k^b�J����I�����O6�V��v��YAvnߺ��_����w9�^�����Q��u)F6�<C��B�,Y���\;�=e��%��V+M��Z��ó6�ۋˡ�y�]\�wDW���G��f�	JK}y�w���b���ϒ���2(�ک�"�W%���]�L[��X�5�lZ�z��؃�M���'���.������,��aW8�8}�I���ђ`8�s�I����M��B߈�h��,͹R����c����z]��|x��պ�iNgN�
d�2W*]�F%;��,g����NV�����[��7'�F~��de�yo�������(����}���O�[�I���<,K�Ựát.n�P�;�w"o�=����Ff��r�ք���U�f̓��:!W�w������D�m"?J��(����r��#�*������ڔ��R��f;.��V�)��4�+��\���;t�	�v^ݞi2y�gW�':Ǯ��&W�"c���F{Ǖǆ��וZ=l�!��c����ƌ����,9+�*�����9;!U�.C3۾*��:�?��+kK���ݝ���tw��S�i}��{���u���i�F�<SnF��lSp8���&���t\��/�.V<�|�H���Z-i?K��'����/����wM�&��������B|��z�fVfyX\���(\>��Ve��˴,��z���o?^�q�7��$��.�?g<Xuazrr꒎���w����u��J����3�=&*��V	����c��P�����&���ۧ�8���Q0�A���]O��Zf_{�l6��M��;S�.]�T�r�+�3F�|�z���n�+ؚ"�9i�� 
F����/і�����\����9~_z��q�Q�r����/[ohٜ}�j����qJ����T����o�'����-閔�����~{+�r�����e�9��߹�?_-���ۈ�����J�Y�fw[��NW^��4�����~2���rA��C��c�)Q��AFN63S@���G����S��h_����S�O츀���xI��]V��Z+&GL=>�3K{I���֛��N�H�ΐ��t�ɋR�7=
6oX�d�sw��=�]%J<�D�_�8N��f���Y�J���x�#/������=i� ��mg�.;�m�ݿS��*�\�5�3N
�qъ��$� �{�mz��ObLׄNRJ�p(c�&k�6�ES�����^���K>w�t\Z���� ]�u���k�5�l�&�������ʭL��~�7�b6����U:)���dh����/��\�N�5�{�q~�����K>��2��6���;W�ߺ{.)Z�r.l��9�O�������Sjsr�����X1u�9(W5�]�ݦpBOQ��g�rK�6-횢��u���@�$��EɆ����-J���U���	(�פ�ĺd�MJ�S[���Y�Q&��W..Kt=��{ZYYY��o��;����$��R�>%�U,����q!����s���e?7����R�H?v_����˾&WCC�}M.y)<���k����V��q�u5�340XE ���f3�h��sJ+ �B�
```

---

### `objects/27/099346c54f1124acb6faa283a30da34a4f3e95`

```
xK��OR�41�`�����`��.b`��`da�qttP� Q���U��I#��4��abhH��be��&L[t��E'�&���s�[�ȡ�pD��|�s�FE�s��Qhdb``���Ç�`���������%>|��H$����?���g�����?666 a�.����ITw�6�b�k���+[�ճ��/��bd�؟����+���6|�K��i0�4fj�Z{g_��~��Kf�G61�4��*Vy9j�_�EFڬNw�yVǭ5U_�|J�v*xA�>%�w�ٽ��t���г7�f�2��Z�fT�^U�ݙ�J����re�]��n����Kg����>�2s�^]����=�AV�O��a�x�ʔ�h�&�gG�^��䓧�L��.��_F��lcw��w�R�
ՌB�_H�j����y�������w�է�	�ٵ#x^��V�_��3;����ҹ�LU�̮�{뾶KɊ�i����6�3�~�Hg����_��lf�e.��T�/~�Va��*���ƫg�\���ִ�E�<>�[�t9pa�]q������)��}�|uN�������Wc��Q��6�[;����#>��ۂ�/�uYh
��F�?w���m2�?��n�kܧ;Ot�<�X�0�_o^]�8C��	��1'���L��ں����"K�{������c,2VUUG�M�����u����ݯVolW^�������ߜ9�֬�X����l]V�?��XE��?�k%�8~�����K�~tt��؜�t s!�+]���E�-qz1V*��dពU��m ����~��p��]Y�_�������Qo)2aY�X;�}��A.{��{:}1�W�x!y:���<���ߊ��pղ������3�ߵ���:3���ήN��*����O	
y�{�ؠ���P����]�]�������J���-	O���z�Yq��}o�/�|����S�vMϴ�-yg!OO��{�&�^�ȳ�`����r>�f�_Z��P�5���)���R��9o�9Q}G�@Xa��E\j7����#f�G�
�\��a�j�;^���)�?t�mٴ��{��Ǹ�6�Vm:ř_z���;�w���V��_��b�u����sP�� #3���w,���~�=��?�:�x>]|�uk���E�����Z*��l��6����W+z�.�����r��N�Wýs{�dE.�ӕ|����VĴ��o��W��� ��.�X꧇�1m��ښ!<s�z�������ݶ�O���e��T�dt�ouo��ւ��:n�;�X��֥%0�p��%�g����.̉	��kDJ������o�ѓLv�P*���}�6�yۢ?;�"D����y~��ģ�|�<��g|n���%
�r�AzS�]��y���e�^F�%s����<9�kq�pVPb���Y���8���#��~����;�ka��&U�4
\�u�!!���1Q&��og��-�<��U打���J(�پ����k��սo��������_'si�uӞ��u_t��=�U�4��ukG-�����
E��Y�s���Q7��]�F:0�s���rEP�[�YI�0\��q�₃�+��e#"�*��G�����2;cYa��ɺzK�,3r�w6��E��[/f�n�=!����-V��S��|k�d�̢�یv�xy?t���������G��������Wg\X�s�d�t������}���O�L�Jl�8V���|��IU:''�N�p8��z�\�BC��9���-B3v�����_b����}1^�����2�X�s�)}�B�����8*�^�o��K�3-��Tx��9���ϛ]��NU���K��5�����d�����^�ҋ���d�9d�ܾ��#��L�<��fs�«�pYB�_"k��ӏ�,/�32^09���}Q���%�yW���Pq�z��I�}#�M�-Q{�J}�]����X�knl7o��ݚ�~�C���N
�]k���R�)b%o����]����o.G��-����:���?ߗ���k�k�_��UA�+I��~�b�}�#'e{1�����9�"���.sr���3�`�,)�9��Æg�$�@3��?$D�d7-�u�Ŧx�ϙ"�7����n�U{eiմ��J���.
0����ꜷ*5Ѐ��UԒ�M�7�vU��������d�a�m�����/V��߫^|����]�m^3�gq-�.����ρ���{��*30��漬�6���زΥ��x:]o6a����i����@F���X��	��9̡|OY�݋�R�)�~V�@Oa���e�/w�j�o���傊G?��ɯIo޺�����6L��"�|���EF[Z�����Vcՙ_J�{AeS�G�3���j~��lՑ9��JF�݋��j��'^w.�X
�9d�p-{g��yƢ�wf:\z��0m�e����¹�E�I?�^�ira�5_}��g�;�J?�,���>�~P��|Ǜ̱����y_�e�I-����ξVzB�J�ʹ|�y:�[#�̌���
3J��R��67����h�����
Z
Xs�I`�)�X�1��D������ `�1��acޕ3A�߯^�4��^��w}f�5i�&[�q��V��2�`�,m����k�����V�|(�lg���oG}��Φ��t|�4���+5�V�9{�N���qK�-R�hqZq�Z{���K3���Y����H���?��w<�6���c�i{�0'7�J�e�k86�V���$+0:
��Z�Z�/o� �.C�Ò3����L���g.ly��"���H��,����e��`�'4��{�=7����r��[ϣ��m�����Yo�,�ڦ}x{�SS~�M�]殴�z*+;2�m��3?�l�����_��
\L��kY)�t5;h���.6�/�v��{Ey�zf��VR�o����o�Z����hŐW*݌���[�R��j,��z�8}TPl=����f�+��
	\m
��m=�Y�H�"/�WL��<���^���{\w���}>Myov��ߕ�׸����mɥ;-۸j��k�r#Oe��/t�PP�*����lq�y![���kfG�Z�:��*`M����7n�&�����c�&W��6G�f�y�bG���KG����3i
�O=�Iq(�]JW,`MS<�L�.u^����ga}��m�KUOt_�k��Kpc�AA���rB�u342,|�8����L'E+��1�]�H��N
f7�f��{�uq���/{N�=�V�`ٽA�yÝp�cs:�3�+M˽�r ����(眇�N-y�;k�����?��~ISc��ժ�O���w���˭9�{���=s�a����vn�h�$�lM~w����S�<�R�����`�zZh���6�Ͻx�S!��v�bߙ�D|��:�ڕ^�ƥ �?�b�
a�'wg՞�0�k7���Ʒwc��߬����)��z������.�}�N�
�)O���A�_ZI,nmc�ьPv��%zǳ��)�'-zl<{*Y
�Xf�ͺ�!! ;��\2�l�h��'��fe�gsk���eИ�*#y^����V����vp�l�,�}�Md���MK�8���c�i�4+Le�.S������3
8A�/r���.��
.�
J$Sg���rLϾ�y����{.<���sk驾'~y�s��u�h���V+���r{��>>/<U6)�^�����%�<��������߿���������/�8����|��Is�,����������S���eM�L�����ί=��˵�/�>ܲ�Μ
;2�e�Ů��gm?bPw5⸸��־6�}+$A��:����Ԏ@�s�,�P�:;w�_�����׸H��z4��������<��9�-���
Z����%�{��	7j5J��{�]��Ukܡ�9��t����U
)+�Z]y׫����l��levz�D�����"<+�޼�
Ժ��Z5ݢ�܂���Ƭ/��zN��ᷘ���32�>q��oQ����C
V�<Li+��#$,r�����g\wXnu��'[�H;7M�w.�ʚW���'Ěgy.�'���.��Z��J���Y��q0����iEˮ?�����]pl�@��κ��k������vڗ	NW1^��*j����syʕ�
M�������9zf��j���)��W��U�7[4-�d�x~��,�G�?k����g�f��Ʀ�d�E�C��	��<�_U�����fT�ٸ5x�Y��]�����[����=�q�Ԓ��}^E�:�2W��Si�ĕ�s-?�꘷h鹯�/ze��9�1|P�e���f7f���s��9o�uj�k�=5��ܷ邝s"E*���j�z��J!["2�4T�,~�.0�.ڽY�\�~6��A�����~O[�Z����"��#�evD~������m{em~�ב]�����b��p�ޝ�aN�.mx�<A��m��C�N��_6lY.ڼ4�5�w�?TP�y�������[n�P]�j�{A��FA�<_�>?�2񚜁{�˘�*��d*M���n0�y^0�c]�B�������ޚ{�}����	�L2�s�)�3�_�r�|���Ór��K��Z��єso�"?~���J18|R�ps`>���到��9Y�������;/��ߗ��ȹ��0��i�'��"�N�L�Ҝ��4A��5�5G&:2������^.�b8�RğS76o4�l���uKV�]��?��|���O�/Y����d��Y���}�q�h��%�_ݻ1Ktѳ)�l7V���o���=��ݺg��s��w,.&����'��F�C[�ܮ]l������{������2K�A�/�"���Ah�]�����K4��|�Y��I�����S����<�̋8^�sJ,�����fNBsG⋕_Z��^�&�$�}�����W���z�y��Uo���H���U^;6�h˟�_N&]�{������u?�ݖ۷�X���Y�=kun�F�|�����/��~���tq���+�^k���#��襫_��Í+�d�y�x�8�X2����D�El	w�]�G����d���QŔ��
{��5�]U��*���Sȑ�oV�-:�w׫��:�^��l�j��P��/V�����>�;ma��u}���ݿk�\��-q띯��Y�J�+s��to;��˭�?GϞ������_{P:x��owpЫ�i��&7�2�yp40	�7��������W�%V�Krܱ��-�#w���H����}U���0TI��֨��fٯ���>=�6g����/g�ξ?��f��Yo���5]k�:t͵�;�g]��u�z��F��ځZRQ��:zL~M=�������v�	�̝��L5l?r�!s�ɶ:L�|B
�m�m��e��i��u�-��G�xmu�v����_w%�j�5��;a�/�h<(	���( - ��)Q�r�zp\��{��l�j�L73����2�˾��[�WP��x��tF��y����ҽ���i�[��Dj.&��^�l>�:���1��ႄ��l���h��2�Nk��:-�\�Ϯl�`f����!�\;;�DxMp��"�K�����c�52Ǜ�\���t\
�!p㬒ݳ���޽u�TX���苣"�pC����|6߿J_ ��^�sT��s{
��i����_y��oʽm����KJ�����H)�^�pB����P��b���*\-?�rZ����F�"E�+]N��,p���eٗ��V��
�<�+%@}ڦ����*ϋ�m9}��)���"��jβ���u�YO���}���
=*��-L���\�4:}�h��q������y��m�s����E�\�M�"��� �OR_����
ם��V�8�Z��x�Kь��'�G$���^��4abDM�ڔ7E_��/��1�j��"��B�J�����.��?s��wV&w8�"S�m^���7oe֛~�r���)Qr�������#�E!c�Ũ|K�M�C���6o�6�|�_�,�q�\�yK�\�^���-�~0`��/���fZ�Ʈ���@=��A��O������f �/Sfҫa�'0#yÍ��g�Ȟ���}HmJ��g��v�o]{g�w��l�����Dm��fl|�T�M���������k�J�yk������4�]ac�T�l�.���V����,�{����?~e�W�ʺ[]�52[�N��>+''�ڼ�q��V�P�$��2+�z9�����{llr^��1s�N&�g��+/\;���%oQ3_�芏]}� ��U��*`�Ƶ��%�Û�ڷ5o"wJ�/\�'_h��Ɲ>��9C�	�|ٰ0�륞�%˻�NMQ��<q��1^Q�C�OO����s���y���~�"Հ0=����;��,y��Z8�#������ꊽlf����t��{,��������ܞ0O͢�M���ىϲ�*Z�M]����0���fdk\s�@�]i���o6��$����J�л �wSv�1��fI�+���b���[�f(oˍm/���_"&���U�n�y[��4R�^����%C�o�a��A��*�R�e�L���W�L0ԗ�b�V��C�K������[woWO�I�!�lX��$�R?���:��J�V[q�dN��l��l
,lM\"k�)� Ĝ�g���jމ&
�>Z�Jz
+t�7le+���t��wz\�|�E툶V�z4���_���}W3��~+�pIŃ�BoN��2�ڢ�M+�zWz>�[�el�e�Sɪ�+?�fKĕ����N���_��ͯ2��W�4�Vo���~Os�<33�{j���������_[]k�]���6-^��2��ީ0�SZ�����e6g������ZO7z�j��Бe�)��gto������0a�
C��_�.rax�G�uA�QiG����n
_-�4݊��P�ʙ�[Sw'o����w�|F���I�����:M��0����|���ܺ�@��Bi��+O���m/481-�mӮr��m.G���KU�5��M7�{����z���R��x6����}��m��'+f�$$,���r��M!��p��Y2�R�u�4|��p�O�����o�����+��|^��33JW�\9k���Ό�e-��s�[_.T*���3��]�3.�U�rjN%����u�ܩ����7͘��'���TDؤ��-y�T��gͯ�lz��{��:�Pg�ŕ���e�HE.��]����ڰ�Sj�_d<񙙕�+3$Y)Yvb����(�����~�'�~ݗ �}˯�?���}����>�sЊ��~���B��?�Ƿvp��ʨ+�z2�e�]�ק�uO'�О8_���+�_�LbZs@�����˚&��Ҋ�͒L�,-9Kַ��I�}_˟���b�W����߶��W{N
���>4�1Im�r]q���F[u^��D�Z|�9�`tR�V��qڂ�n,p\�{˦� ݒ��EB�+�oS�����ٛ��=ݳq�
�Ӟa�;A�����ρ�Ԏ��'W�ΑͲy���沵1�*���)lNY��\!,h��lջw�k�6��I�.s�ι�
�J��/���.�����I�V��z�������|Qp�����u�����/e/UrT��Z�(v�ȵ����ْf�
.3L�s	��Hl�1�1@����K�>s�0$X��ڞ�v�����1	V�'�):��j/�(���Τ& �'�>���$��\4�.m�գ�;���U��H�����5����~���� �a�w��g
<b��=�Df�ɳ�<6��ϒ��s�Ï�;�ϋ��螷��𥳐�w���9����{�3��6��ko������'�]e�޵�jC����)z����(�h�5������Q�?�����{�{�g�s9|g��`�p�Ra�|�n�t/q�	��A������h�����ɽ�ҧ�|�z��u��\�ѫ�J�/���p�a�e��W/�2�����Re�ŷ�'�}�p�Xڲ�õ�˛�U;^��,���iw��[��|��[���I�2�~�n	�h��{c�V��-�T'\�K3u�ɺ�s��g�KR����4m��Ǵc#�W<=�}���BR�����3i-�c<{�=6_�p��7M���4���{��^˗���y�����9�m~��6�]�g����$����ݿ\̸�����1m�V�/����99y�������p��{�]������F��f����7�������z�%��%�{Vd&�)3��z����k�}��%��;��k�ꆒ/N�Uڏo<=ݼ�����ڳ��bN�[�veH8(�_h�a8|�n�}��i���n�^��w���on��.>�C H����R�}3��DE�̳�ٲ�ݬ����t�V�i�'G����ڷ��hg=ۓ��|��7�1��ݭ�n�敨��-��{1y��Ҷ9�r§Td���\�V����V�޾�̾՜d�q��WQ<�%�>R+%*
]�<.*2}-62����#S�r'/�seEeV!��o�{�8�����d��(�60��e�e��y����e4�,�$|,LS�^Wsy����R�TbU�(-f�.��Ddʗ�!vA��Bu�N�����<���ufY��k�Xe�hI����@-K�y�6,�+��f��)�{�������-b~�Q���j:cձG��.�x&���X�1q9w�BiîcrI�/δ_wH�j|����/e�@������é���zB�>*J-ߺ�Q�����滧Dm{o�|�<@�_���)yF~�'2w���L0T16�?�}��R��3��rO_"[��#Si���Ğ��	��.sv����0w˳��2��ސ��*sCX%��/k5}�'�}8<e��S;�l��Z�!z>�^��ʊ�-*y��=U���X5Jȭ7�\�Q����%g�����Y����%�;]F�W���<�}�أL����&�U�i�ݸ!�sV^��5��ޘ2w�.���.����z�x�	���n>f�+R&��j\�i���ٗ��Y��WVə�߸�+l{�V�+Zl�xfm�ù�7��
Nٸ{g@G^����~G����j�a����\���7Y�F*�R����h�0�[�:�,W��s�V�&��o?����M5�L�Q��-&��]��}�FtŴ`�G�2JlQuj�=�0�`��X�����������)��K_ו-��3Zgڹ3?lz�5�J�[9�r�Yw����U���Y���sg�J��d�w�|~�,���P���N�6f��*���d��ݷ勷�ytwT(	�eRV������pSS�Xiщ�¢?5�|A��I����!�;����z���=���!K\��m�d��ZSʸD��b���Qo�'�%���{w�n����b�-l�۲S'7\��*�*z�3�_���;�'N=�-�vl�FײÁkj�ȵf�\�N����c���6�HS���J�q�u5�340%	���Q�9pé�=$��	���
```

---

### `objects/32/7bb200dd3ef15eca3f3614561427c4bf0dd11a`

```
xK��OR0�45b�����`��w��0�{0�:�q7�+���@��A�bG�)�3�M�m��w��ņ���A�����aA��h�Ѥ�k�L��b�Pp�2{n���������!�9�-�J�p(842�p\\��+���I�E�ï$��Р����Î����0������Р����_�<��������}l�aq'e�+�w�_��ˤ)��EtE�Bgd0�l�l��h�\7��=(����Q����*l[k3f��s��_1Y�ڿ7�/x�,���s���]<K4�N2�bU
d���h5!��9�0S ���^?~c������˶�Q�{٪���O*�$�<��v��K���M�ܖ+^
M�^o�,|�B
��w��?1|eܺ�'����w&�����9%s>�}���Ӷ���z�~!-������\7��o����sC'Ywݸ���l�����m���s��ۯ�Zߏ���5��{��.�V���y�w���%0�j��c6���W<P���XH�EǷ��y��c���2�u�k<�η����2����f*��|6�o5N����ʿ�����v�8�-�s:�:���?��V���k�����ٺW��Gr/��%���z=V-'����$�Y8���>�?�]����>���:�mz���~�?j�ٛy����ݮ�
5����>�2�����W�VKL�̙ū�;���x�߹?��VOJ��u|��ѵK�5{�+vm9{��U�s��{��N|���u53S�y�O,]7�x�Ʃ���?~.s+g3�Y�����,��OZ��s�Mr�v�u�J��X�� �k���w'������������������?n��?�������7h��e�f�/�l�ݿ難�]:��'-��e��e�����=\�����M�s�_=�yh�g�-um.2�Y�$��I�poA���
^�$�������{,���n]VD��K��1W^�&����7��W�D�W.�b
[P�&Z]�;����'�k�~�7Xe������ �K�챚��w������_������f�L�����>zO��=ە�'6�}Խ����Sw�F�ŬW[���H[=�[fY���ˤnڄ�Z�ai1�&��S����vJ���~�ٷ5x�ˇ+.��u�h,hp�������e-����Zн��v��-ý;nI�H�``��Rk��{��v���u�+x�����o����u���_�ߞ�~��%qw����S����ϵ��������'����w��˟����R���N�Td��Eܞ{rvؒ2qѽ�
;�[[�񜚩6))]�-GĔ!v���f��^��US�%9�[Қ��j�p�ܭ���9Mov���%�Ց�۟���>��toc�S��W3�k�-K)��3D�(���s����36:�/��!c��ژ�����A����
��h�a��sw��S���&�ӻZ���}��������N����_�������ﳬ4�����U�}����v�͞*S=uU��9}��,���h>y��.������UY���''���6�j^��h���U����U��z�-6��I�a�]E���H�zx���da����3;x���l�����r�����R��K9uf~��(�H����)�Ͻҥ߃��~Xh��[;��E��|rN�?n�!�Z!�b��ɯL}�]f�k���b5[r�-Ht���F���j��4m���߂�/�{���}�5�������q����y�J3��ߵ�MaE��p�����.���:������\�M����m��߾�X����UO6Y͝�{�^�#��a��n�V�����S3�W�
��E�N?��r��.�)�$vl���������ܨ�K�W�;��u��56��\���~cV�����٦<��>.J	����t��#�/���]�������""z^��`�O��`h�q
Ξ����[E��9���
ذiU�?w>� ���Og�n���Zr�@�u\�C���rӟ*l�pJܭh�i����
ݾ厗y��|�U��o��W���ނ�_�����k3fH��ݳk������+�Y�6�a{Q���K1�O�������_�uY��	ϑ�[tKlyg�<^����'�Ѫز���C3�d�z���%ީ�s�e�q���Tui��I�Ƹm;�sC_�L���l�'����J˖'}�-B����^5�j}�
^�����I�_���:��֝ik5+ם��:���P��&Wv����g��p-n����b;n����z��f����)�uwW��k�ٞ�s^�zO(8u�0P�aɜ�9�M���Z
���O��Ϟ`��q��������}\r��|��)�]!��ʶ���=�����o�=
��/o��O�ej��RN��:��{�K�Lz��޹t�j���r�6��/�=��J$�������������iw�̦L��g�6��p.n����
z��.0q�(�|.��ʍÉ��a��y�o���|'o����ܱ~u��%�X�'5-��e\��r秊�׭�{k�w��/q�<�tVU���%��h����0�r���RI��o58��:d�Gx.�,�����ҹk��6~^�~h߲�5�_{6HIL��y5k��g�.8�D��N�9�۝v83>X�zp2��;�N�����Iڮ�R��
%sgcmg�fX�l�I��C������gdU���_Xo�$��N���Ӭ7>%�a̓*��R͒�����l�F�fE����N�?mP��r�V��Kႌ1�ט��Xr"����ۄ�曲Nf�0ڼ���Pph��d��)S%NҜU��Ń�g�M�X�S�:��s��J����[pe�"���U,�J��Mq
J4�(� ����X�0?~u�l��&�����W����)SV�8�i�줯{2H0�m��I�-��Py��h��}�����w�ݛ-��/I�h�f+I�W���������]���������Hsk�58bäipB��X��ˁ�����^�3+��/�[2�߿�d�_.<6X�:����FMG6��u��l�q��l�~6�W���C��*�n�d/�}���dphG	'��d��i;�=Y�W��Uܩ��ؠU b��KBg�Q��Hغ��7�J�k̾#���q �)���%����V�\P�<��#��ⴓ �{ O���ݛ��]
fO�q2�p��]��D!��Cw*n>�3���X�S	��ĥg�n[���}�UQ�d�iypW%o�}����<1S`x�vG�7�vK�i����Z%��iۦm)���/�xEޚ��[oygv��6^��mSĦ�[c�DL[����דn���	�\��ݣ���h}�z�%��Kw���񅑧CvM�薵��ت=_j��=�<qK�ֽw�}����g��e�=���a������QgNo�
��0m퍋+�K��|h�q8��j]�ٳW1\�� ���S��a��`P��-�IK����L'��/D��f>zm��_|���;�Xz�s��KE�\O����k7k��J�
��A�%��͛�v�Ӣ��'uO�\yMPW�����L��-�������]^�dp�˛��������)���k����Ư>{���k��}/枸���mo=��-�qz�݅_�TW�O=��bp}��S���A��=�J�q�ۺ���[_�-�]����d��$Ųy,]�S�M����ۧ��ܾ�k��RUK�f�tFu��-���u>�UǑ���SYb,O\���6�k3ӌ��A�a�	�3����`k��xd�e�˂4a�����Z+W	n�pD��ʻ�}�K�8���h�Zx�aƚ�1?�-4vU�y����ĉL�;�_��9��gD��YO�<oU04�L�Ҝ�}��s^������Վ)���uz�O����Č�#K�>գ�'-�k�t�,cQ���c7o[��im���gW5vo:��=M�8�N엫�9�b�K�D����ޱ`�Kf���?L6i��ߘl�|�l�Ñ�]��7<�f:'nϴ�E�y�g.x�W��aZ�EVŌ�[����fD6�_�Y�A����u� �K��%0�����S4g6�K�k)�YF�����z�������%x�O=�/|+/;�]�Nbi�߉ʜGsy]	�^�*Iꧻ�ٻv�936�αx�.�a��jqК���ʱ�P��J�5�Ii}/e�p�^�w����^�Lr\s������e�=S�7������o���0��9A��������׊�:���0�[+�G�`�4�/ ��k1]�`8}a�ώ�|.*wԎt����|潅�W��oTs7��7V?\B넾��`�G_ϩv��v�,���У�0-iu�ܴU�|e�N:3�i:�v�E��m�Zv�Ї}Q��E����mL��ط��?�e�����4n=������ƴk����)�=������V^�-A�b�b��a.~OV�u(L���s�~��M^�N	�
�ܯ�>�	��;�l˘�5s�)�W�;�Oyg�6S�5�T0V΄��֩�}j
����򔟱���tų��?2~�R�RZ�j󮊞[j/:f�m�=kR~��_~���7/��Ӹe��z�&�q��'���S�C�n��Q'~.3W��������jm��n��O��ʧq��*j�di�����<�q%e��'WD��\L�[��g��N��L]y�
�!����:?7�X�֬��kjS�?���%�=����V.�?|���;Uqߦ-YrgW��?o~
�.�������铗�ˬ��N�_�����[=Ͻ�)>�Onƶ���N��t�����L�ޭi�Wd���O4����� �ߧF!㌀�AA����E>�ʱ�X��s>3��Vn��iW}�L����.Ҧ�A� ���<�%�P�v�见vH��ъcK���p	�l���vI�Jˈ�q��"=��\��5��8���B�'T}Yd��U�����N��l�q\St������%�w����-�O�Z��Bk��i!Q1�Wj)��O�|9��f�9OB��t�{]�𗒦St����#筊|�j͝��BNF�JV|�������w�Lt�y���eu_<�V��r�z��!�����~�s�_t������ڲ��M�Q�����wG�V��1gw~�ǔɥO�3kOߜ�Srm�\��d{X�E-��"1,��.6/a�X�)0�ӑIԭ���'�����͓j}�
��׮.ٗ���K���f���GS�|wT�=U��h���o�����Y?���j��d�fU�t������\p>r�aɔꗓ/Ϯ��A�����=w��xoZ*p�uc���B!�+����]���+�U�XW��c��/8��1c�㢞���u�Ӯ|9�8�ת�eI��%����y/�r9r�e��&�'��[�Z�M���&\�y�;c�����K�=[3������m]�+w���W��O?qF(���=f{Ŗ�������}��ﶳ��?�Yjj�:[�k�77���}��~r�d5C��Ӯϻ�>��4�h���	O�L�,�*v��
�+>�Y]��ɖ�8���4
W�ܥֹ�V��L�%ſL:�l�y����s7�na}8�'�\�Щ]�A\���ɪ�&�:�Ԗ)K�-�p5�k�Ćc�X��^���ke�ac��J�F�,��,�[���5wё�&7V|��4�HRn����
�߷�������*�/�`8�vg���u��O�񧦆i���2�er�Zν��e�*�g)�V�	���k����'c��ߘ****��wL��E���]�b@�ě�RCb����R����2A	�'!U3<2e�؟�%$�y�����f��5����h<q��u��H�PG_Wc=C�P� ��gԕo.`8�u�(�K _H
```

---

### `objects/32/89af93331d9415c424fa0358bf24472ae2b445`

```
xK��OR05�0a�����`��F�`8�v'e�-J�J/�m}?����v"�S?D�fk�p��� �-[sA��~Ig��$���ӎY�O	�{KI���..%%�O�wl.�����T�"�υ��f������� �ݳ,
l�������S�����Ib!����ŗ��p㾀��ꑟ^���0�H�|�C��d��;�v��	sJ���r����#�Gnwk�t���UM�Em�9�Rԫ
�]�d��B�M�sƳ+��6I
Z����|�����'�3��{�i��V��#�L�v�e.�&��<d�z_�eӦr[M�g{������T���{f�zW]��Ṫ���[�;$~�/H����=�]*Ƞ�p �'��D������,���c�bl�n�L˸T��	0��ܯm������]���Z�+�,�2�k��	e�>a-������&�	q9�yS����;5��+nM�+vKo���p��a7ۿV���g�1ߓ����\���"��~x�����ݧ�#�_�����w�����~�
d��lS�p�����Ϳ_�0G������m����[\����Q��a��jŷ�!��ս702�n�Xq��Ǟ	�~�Ob
��f002�����R��DS��GS�I����q.���IaS'���Ѳ����'���>odZ8��j��hw�w�S<7���'�M���_+�Q���{���u�\�>1�=p��{Ϛ�}�^��J'G,a�~/�i�����Ϸ_Rhn��Q��W��N˼��l���]��T�*�����CGa���s~��],��r����Zý){RΤ�ʜ����¬9�MB��9�~;����z���/�]zOVl��؉�蝷�aMꛫ.kO�-���{����V�?|�c��g��M�_lL��HV�Z�:�8@��PoL+���'^L<'1#���{�L��y��������v/��#k�ؚ4�-;�u�ج�(ѣ�f���!0a��"��Mb�/�V���|���*�!�~Y�`��k��h�[y9���;�<��i�Բ������滹h�ܾ7E⇷z��ʲf���
e��'ߌ�sb�Y�����kkFTyo�q��ã��N�ؐ��k��7�.�"�
�|����ydN�ir���UZJ����0CY���}ƶ���w���7�׿�������e�Y>�ϢW�a����m��,�j��Y�@f�i���H�{� �i�����v��G>�yta�o�ff�o�t�>�O^��a���K�KÌ,?��#��l��ia31HiO>���"����gw�z��,K_�yh=��2���n���|��,vtz�b?)*�a��8󂋕����%ױ���)3ޗ�/���/�;״I<��bg�y�歨�����Ϩ<�`���uʇ'�5�?�cz��b���:��s�l�i��~;70}j	`�y��Ql( �"�X���d1��|��#����;Sb�mb�r�O�d��Ғ�]���
��X���~r�a]�!ӥǻ
�kO4.<^n�g��~��ƧS�S�r7_>) cqE_#��g�Uo�����������,�)�ޯ����vi~��B�`���cU�x�<bY�x�oɄG& �i~�a�6cƵ���l�!>'����Z(s�x�}����[^��O�D�l='\�
86&�9���b�zX��k���;ףv/���!�!�s5��TI�#N2'�w���D�O�����]�lk�wy���^�(��8>v����}�_���������E�Ι:�.Lb��ek�fKת����%&����d�WV�/N< �K�t���p.nJ�2��|Y}��r|��
4�O5��5e�����y178,2�?2�A�W��Ԡ��!�M�i��J�7�)l٬u���Bo]��hno���w�w��������w�;��\sdM��i��6:x�[h�Օ�^�sv]��գp�D�;\;w
7S:'��V�����^>��Ye��Q����-I
���<u�A�PU��p�eϧ)ʊ�Vl���Lj����vَ���q;r~o��ӟ��]9��^�9bt)v����W>���
�Y���R�&�	=�����������K/s�O�x�C�bi��a���{�r-�~��z�yv�ɖ~��uW9j~W�|bl�T2	(�um`Jm�u��r��k�K�ؠ/Kw:Lz�(���f��S�N��|{���A�S�� ��%�k��B�Ҿ��5��S�Rs��셇%=�oL�y�~�T�Ĭ�V����?�d>ȑ/:���8�n<s�I������n���_ތT尅-��g�z�l৩�y�m�I�Yʾ�l��qhG�M�Z�sZу��]�����Blrr/Cm��΍:uWe��=k�����~N�㔕A�Y��c��޼������a
׺�(ɬrP�<����g�z�x/�7w�D=ș�j�f<V������щ�/]WM3Q��i��Udi�Ee��������O��z�y=���n�^��"=�T��嚗�j�6Nߺ���l�F�
Ů`g�5W��l|�������6��<+�؞�]ֹhKyf]�yX07����}�6����w^�SR
��w͜�%���VU�
�k\{8��N^Փ�Y��礃8�\-�l��x�踾C�H-�ڜ���8��u�U��^��nX��x�@�6��ؘ��$x�/Q�=�+V����rW9�~�s;�u􌕝i̯��,�9��7n���J�+�R9�h4񊫻��k������v���u�-{t���:m�H�XUȉ5}]���͖�x��
��1Ż+���
���T�W%0��3������D����3зy""b�����#I���'���wU�h`���oye��j���Eَ�2���Mi/#r1,T���H*������W���[h�������y�<�����g�7(O����E����>��>��j�mo��%��k�:��Ϟ�o�GU�|�p��z�����|�)�WTe.�K��-[Ŋ����J~9UB;݅6��Z���>�7�����m_�s�j�L�k;�Mv���J�}����n�����^-��<+o��g���aa�S��Y�U��Z'�w�Ӳ��)����Ȑ��jZ:o��I�,�m�RL��jl
N&O��`��l���]n��<�[?�7�d�ivۼ ^}3�̨�u��?<�Tt?���m���Ⓠ��o�ng�����*��2I�8��8��`��{��J���������\)�g�7.ވ۱����%�1��JI��O�t�m�ݏ���G-��U�O��|�cv������}��u�|׳�ٚj.qZ)������'NF�4ٯy�i����t�U�O5}�ژ���X�aX&����o��Ԏ�Y�tiձ�k�mwh�����I�r���]���`og?����.����~{���lx��N�u�_^�ζė�v�1n�2K�$䆼�������g'f�(�t
�X7i����Sfi?��wT/�8e{i��;�������ߜ��Sl}į��v��s��˾yݞ{�˔w��1��?Syn�V��]�㢮b�κ���TC��oϕةlY1�m��Ž�Z͢~��_��?��^'��w:�u*�/��
�˩k��q�Ĝ�߫�O�ׄ~*9�ϲ'�};����Tr�=S,�?RŒi���|U��� ���rN�y[��|�U�����f���%�?�H�|��<���_ەK~�GN��_���n��k�y�J|�u�S��j��i�-��W��]�eY��x�/s��>���2��)��9�r�_�����c�n�ؐj r�{�+L"�y��f��-�k��T�5��D?M;o[��9������Z#(����*����♛6�Z�#�nښͱ3^�t6�l���'X�|�o��v)����2���Ϟ�Vv[�Pؔ9���IBS���EU����K����.��e<�Y�ַ��r���I�V�Km�{�sy��G;�
�+zK\��t"I�QT�Qj����s�i�T@���b��p���̍/�O{�:��*�h߬�z�H'�i�H�{�EkW ģ�[F�wʃ/l�z�b�b���E�
ye���&%�UN��/yk�Uo5y�Xw�"��ӑٱӚD�,+�՗
fZ�.��ا��B��u:6��Mr��|���a뭆;}�8����yjH�2I���k_�.��=�%�t��Qߌ���.����i�� r�s��?''����h�E�l}��	۳���NV^����U����=�pf}txi�m�yg��ڵ�gO�o�?�\�=�ھ�S�g��=8�9pE���LOY��!5o}I2]^t�g��?�����,�J����׸�;ו}�my��{���m���J:�6I�{/�n^�؍�VJ�'oJ�lJ1Rx���*xt�d�/C%T��������7Z2�?N�ܽv�Tu��@��I�B��٬<S2'5n���q*��3�
�Sz��,���+j��X��,�Ӓ>�=�C�����N��R�	ew�3ة�+��옗��G�w�P�I�i)��樞�<�Ծ��T�S���]qX��JRLw�����uN?ݸs����W������Ƒ���$B^�6X�zɭK��6���Ĵ]�����/��L�*��r�Xx�M-O܋�s�W�N�yd1C)ӫ_�q{ೃ��ft�^���
]�q�o����gx�R�_���u���rJ��=��:��BU���԰gO����6y����ܴdJ��%rQ'�:iYJտ4~���5��-Q�|�;�E�Z�Lz��zz����,���35�t�ړ�\f��X��1�&i�����o� 
�UL��|f�t�M-Ҝ��g��Щ�܌�ә��J�$/���37L�U�������k�������n����9G�ʲjT�8���g�(V�Q5��~����s����l���IM�;�_�|����^,wy�ڞ ����j�gh`��D r�k��#�|w0( ��
```

---

### `objects/f1/2239acce86942fb538fe80b9b09da8c658e0a4`

```
xK��OR035�`�����`��YVi0l�Z������C>7Չ���o\�A�GG�A����A��(��2��&'��9�|fH76�3�=/��${�����A���E��z���
L����n003���}���do�����1����
l7*������2�a���W���B��"�?,���g~�9�x���"��"�v����Â�$J;3��288��/���ȃ���ˇO�R�
F�tQ�����9��5z:N'I^���>O�G�C��c�%.���x�=R� ����Ys�	���J���9yN�~�G��&���T��{�{^x�� ��W�=J
�y�,5q������p���Nk�����g/�QQPu����-d6w�S����8/7MvtI�4r�>��IP�~S�����;���sg��r	M;�S1��&t�e���q�"��sN���W���|kڲ���+��Ϝ���q_���3�,c�͈����봸z�N>���B�wrM>{3���j�����ߵ�m��蘌��i]�c��_=�}Ɩ?O~<|��x��C��Z?�[����
����SS���>ums&F�qX�vW�g�ߵ�l� �K�,1�ap�q�&���ӶZ�3�N.7���׽I������W��n)Y\��>���%�o�ӊ��9������������˼���{B_6�ʵ\�|�wUկ�K��_Z-�W#��)�b���I�i�O7��Q���U�_'X���FV�ї]on�9��2���Z�Ι�w2a����~V�,��"%��zn��?�J�����������ձ�`8pg��A�'G�:�<�����|������<�/O\�B����J�ӜW��ݵ���>	���h��Kd�rw	��{7������{��2�����~�_�k�2��?۾/9a��K�an�ۗ��j��z�򂩫��^T�����$gG�N�Tg��;Z��妘8
�uvرt7ܚy��,؞���h?{���M�_@��I1�a�'p'�� ���й�=��g�4.��]y�նL��.�_$y�����f���M��[b�8[�M�ó��_�G�������?�Ǵ�I���(|��uM3��7������~�����͵v,�}�&�����������������?/���-��yJaO��f�'�:s��|%�υ���Ќ1�X�p���a��%�\�z�I�U3��E�Ƕ�W-���{u���_g�E��7�4A�w������m�^��������2mW���1���m_�����{��_μ�%�sr��sÍ���f� ��ΟJ��4T����]�y1��������^oVu�]TὲD�Bʵ.�k��C�V�.���iʗ��Nh�-������ws�-���yф�.��\O���:eA�֞c���L���x�+��Revx^��u���eRmѿV-��Wwy秧�VJ�=v��Y��'����9O��W>ۮٷ��B������&����Z�IP��<�w�S�Z�o<�����˞�>ZQw������/��Q���m�-�$�����/:�\���o��ks�zMKm��vO��)յz��ŋW���f�e-�:M�7�����/�-b���������l-�b��]��ͽk�uչ������9��ڱra�`?w�Z�uB����=9�rPE�@��k��׺$Z�T��������.ч)S��K�ڔY��_����vo��{�^�\�:i����Uԏ�墣��;7YJ��{�����w��u���EqyJ�[ljx2k���-)T�������p�����۩Z�mg��A�ՙc���L��wƛ�`����i-�upS�2���������� �n;���A�Ļ�����Q츻6d�A�X�Ġps��<_u�=�o�mS�b�Թ��Y�d��?��/���o�l���������|S4��09�ѢIg-���j�T�"�yI�������o��婶3�z����Z/�^̺�G0jb墕��v[�^�!�A���?��uM@���n���;��؜�q�ӣ��Kn�m:��yŒ�W���:W��]�.i�{�p��ב���<qe�Rל����Nz��z�ֵ��"����
J;,,�t��yD�;�t����Y�2}����URΛS5���<�,������U'��ҭ��k}���k�r���&5�����|ͩ���
M�z�Κ�cqa�S����|S._�񇵁ce̍'��m9^�+e��<��_{��6�b��/�����Ʋ;��'��`���l�B5S�M5y�[��k����x��N���N�7���
�)q���E����B���?���\to���PG��gkM��w��W��%ǚ_�6U0tr��]�d��,,2E%�t�2gk��-ά:�7�����Z�v�w�ܯ��Dn
��Swk�����t��ֵ�>����W��v�9*wٶZ�B�{���B9��^������ߝ��Mp�1��ͫ�Wm��Z�����������[Ud8��ǭ2��ʒd�����ZGߜ�����F}'̺~g+��3VX�Ƣ࢜B����܍j��k>62�_ͺ��=IV�W��k����0�����ͷ02]&�"0A)b7���9rS.��+���}«���w�zg{G.�d�R��g�~�]����/��
��-IM��w�t�������}ڪՑR>����HA�=�������|׫';Uw4�~�{��u�웧�lx&��w��x�.�i=Zښ/8�Mk簨8~[������ڍs�?�h�]]�j�p�d�|[���i�n�
����vmI;Sp�r���FVOәw|�?V��U�=���I߲)�0�
�����UǤ}����W�oeuV
^��f��S�o��EL= ���1E�B&��l��*G�3Ԕ��\x�ԍ�cƖGi�&�֙:��� |�X(��ѐ]U�M�b'+�鈱�yw*=�Jے�D��]	�ɬ\Xxc�)��Y�,�8�}�����Û�$R�z�n�������w=��J^��ڜ r���{9��f����+�������������Tj�C�k�"57���L��;֘�(��UВ�d��U�A�(W�fE�^�5�b���{v�sO~e��O��g��&���n۞���ם�����E����G.�p�;ee���u[E��eщ �4E��=Yҵ�nM�rI>���Ԡ���r�L_��Ͽ6�}��}w���5Y���,w����*}Jax&�#Y�S�y��&��&�����3�`���\���ǰ �*�1�����ӌ��<�����4qڳ���o���7h�፪+���Fv�[گ���ܮ��W����4N�g��E]q�׌e�Y[�ɚ�H�z~�������A3g�������+K�r�{ë�;�Ϫh֓rr��RTv8�9M��Yо`����G�ր��jҫ�gQ;"&��l�ݗ��L�G�G�J���Gl��.h_S>#��_x�c�y3�붔M��|~s���w���M�?��WT��Q����SySm��й�W�����e%���V�ˍ��A��u��W������&���Z����ʠ�� �f��}�"�{J�8���d>�琇D��;����s����/F�/�H�t꒎�(�/�nz���o���"s6����]pf���Eo��?�u�S՝��sw�|�i��7���+T?ޚ�`~M�-f����-��_l�fT�=����ɿ/����ր��N���޻�cL:=[�Y���|?���Q�O'~��8�j��ġ�K>�plK�hQ�������4CAAj��0A��;g?j�N�c`�����ʶv6F�`�� �����
`x��ׇ�;%��.[��hƞ�zf��y��u ���;�}��7gơ���Y'*�L><O=����̉O�J��w�2����3a�jwN�1���~���M�*�2���_���w�v^��M'�4lh
��y�Hqӻi����t\2/��8d�B�$��gc󁄟�%��q77��s�p6�Z����Ui��5���X3K4K_��~�S�<�I�+x�c��L��ׯ
oEXe0�����-R�;����bɕ�	��˶����u���K��|�o�b]u�t���͋9��[�,�R�k�0�)5��1y�.P����rw�4��v�R�*�|
h�`��_���SL���w�~�~��!��B2���D�@Sc��	����?(p�E3=XZ���*�qq�\�/p��w��3�=�~o���;{s�g�/LW���,�\l����00L�������v�$]�����}�i��W�JK%����;�BO���OEK��d��e�( |�k���X�˱�S������{��ŗ#>O�{��粍]��,�GR��df��o����1�J�a�E��\"R��=��g9�00�	2�J�:�{�|F���Ε&Gk}n��__�φ�Ȟ���s�΍�4��ё)�X7�
-�7�ҕ+[5����Ī��ދ���K��N*�zm�U��#F?5�j���4q�LL\)��u�Q�p�����o����|֞��o_���W(3�!3O�`��F�sE��D$'Lpv��p�{�o��*���B�����b���[��d��z�}ٵ�%��r��e�
9�vݚs����B��I����&M��b��O����7.�s���wZ]
��{�z�)6o�6��g�)��=���Qދ_jc˲9�,���ܽ����vg/�r�ջYUѷ�͗|w5x���߶s���v�ޗ�+�<S�s�ܵK�=���EF2��m\�!��{����M
�I�߮���ݱ0X��Ga�_�[]�e܌^��,]���%���X�����Ra�&�w�y��N���n}�V��������:�
����ݚ$:c���o�������P�v�P5-g����Kf��q�ֳuZ����/�K�;{��S�g-���sۯ�?�W��w�χ�W�κ���~�}��{Bo�4�W;�w��A�WZ�[��ES-�x6���,���+i��>S�l����yP�y�3���-���;h���*�n� �?�����p���Y�Y)�v��OS�����~�'Ǥ�WN^'��������?��m�����9�Ǆw,;Y�*�׻���7$.q���%ۿ-�S������qOКx��/nG~Z��?>�Jp�N+�Y���\4�V8�g�ڰ��'��},t�i��{+z,��}�
9�֪���=��?�P�Q��˩���=-Y�۵��¸̫[�=[���wړ?I0�>vwvi��=�c5gm"���6|s��_�\�:ޥV}�Ś�J��n�t��W��DA��ݶ~ל�DZ���I�'��*u�)���L�s��wYϙ,��8�����*��{�1$Nv��c��͗�L�������%����}�m������1F�[��ʚ,������Y�]-����2�XV�=}BfK��Wc��Ihņ���;���� ���^���3w��
�t�3�d���"�:.o}y≘n��d���&��ѓ�X��?8��S�M�5�'��(Y�iC�\$�c��C��lӚw��&=�ya�Wy椽��H	�xtm\�ǌա��XQ-`3�r��U�O�'��g�H�o׿�x�]�5�W28��1�g�<}�]�IL��ҝ�
E7+\�3������~��U�؂��Z�D�é����R}�s)-[��]e����aJ�����_�)�/��fu~ٟ�^�9a*�j�^�r5[�����S3?�O,��vz���+�Y�\�)g#2��j>_�����㛧�'�S���95���e��+�kw���Z�E����v�m�����E���ޮY|i���gsC]�YLV�p�f:ҧ̼���VN�X�����V�I�����Z{40��;�w��Hl��М9��$MzkN�vrY�{����Yg�^��73��١3'�9�y�9^:$ᶶS�貽�>�ު�\2g�\^���Q�{����y�j��W22��[pkڅ<aS6],��uf�ǫ��*ײbw��n7�ɲx�7�<�xo��|��+BZ~�Nq�;��n�I�i'�<�����ǔG�G���������K>w��N�]�z�y�+���_E���fٞsb��'�R�{�$���Uٽb���p���Og6y{VbNՆm��|�l�[ܯ�����:��a^���K�k���wݼ����_���w����J�>oK��b��Y��܍?Y�z�l�Rp����Q3�R.\�͓ܺk�fY�0uq�U�'?�92)R��D�֭'�<]�,S� r�k�?�_@�?�HI*�[��_�L�m�:�>���2�[�}��YiշkK��QG����+����JƏ�k&:�)���m	<*�}9��ʰ�G�p[���������M9�krŶ
��\�]�6Ŷȭ�p�g��Þ��o�[�h�4�M�"�|}]��
V@��w���i�;�jD� �ǒ�
```

---

### `objects/d4/8ea93caef0b83054ea4ac6b16d425cd193ce19`

```
xK��OR0�45b�����`�+/ba�4`dadp`adt�nblh�:��%��bѮ�L,j>3�RNNVsh���˫���K������ݻw���PpRdJ99y�� A�Ç�32������%�����q��M���_��M`Q� ���w¥GG~�w��Z����Pl*�7����*�:V���+�]\'�G�j�ua�nd8���sf,�rm?6	^[�Ɩi���1������ޟR"���y�+���
�i.E�M�[}ͣ�p�y�F���v	)���/;{!zӤˑ���.y��o�������f�Rcƹ�Ow�r�i�����Cj�qPc{��Wa�+���p}��%|{�s^Oo�ɯ���]�w!��J�k��0�G0��奭�e/�|�tul��%6{�,�^�{���S�w_�˫�����=e-]mǵ�&7��L^������k��V�M�0�O�:�L%8��S���6�快��O�?}9�Ĭ�߯K���\=�4����_��_�pһ�R��u�Y;�y�ݾ��񜩋$M{Y�.;����6��R�j�螝�ks��̴O]� 9����dF.��j�Zo$0��L�\dl���������<
rѸ��`���G.$9/��q��%Q�Ip�m7W��׾:���*��P��w���'+�>c�;��?!ޚ��}��T�ڨk\��6�����m�ٱo�z�v�͙7�ܮݻ�z�ӝqkN��V�����<��xf���e�'�Ο�u_�����Kw7����c{�S��� �٧�����p�~��R-����<��=�bj��oe�qYW,Mu0mQ]��?�]�S��+���o.Zwm���g]�	�O��Z�U7�h�/��w|�����tm����lvz��]I|�q��#Hņ)v��N��qu̝���&��ܹwU
;9�߯�x$��ǯ�MϬ��_�ee��eO����	Yi���{�%�d�2������r��o���,� �K�V�50ܻ��W1[M�]�jQc�1�W�ȟ=��V�K�;`��=�r�a�����T����p�����4U�.��x��5��}�ڵ�,]<�Ndkʭi��]V�u=�T}�MU#�`�
6ǀ��M��8O�ȳ���7z�J��]Z��������g������_|[v�{���Y��v+\�0��b��i{�G��J���/��l��p_j�D�v^an��7r-{�	����d(��ȑ���3u,��:Ҭ���$&�Ɲɻ�pߛ.�1��vg�~ݫ=,�C��~w�����>�wz��nM��^nU��PVY33C�馝	1�;�&*EV�٪�LO��ZUq^�Y`?���s6�b���QoPP�n�c�
̝L�-v�p�j���9[�&8�J�2��0\�1�]su�	V?��e�?����.��Ĕ#�5�0w�#�d��F����z5�z��$���K�m'�9�M�a����No�SS�<����:x���fU����:kg^���7uڙ-�}ŝ/���?{�Df����>����`%��C�ᜣ��{"���w��JS��P�;�G�t����$5Y�(Ʌ\�=.���R͉���.ū�3ST�����ng�c÷���K&�[�=
uU���mYc��U�ܨ"$�r���c����z�^M_���k�&��u�zK��Ʈ}�b�ڝ����\����������F��_O��	Z���A&��b�_�eb�2���Ֆse�M�ǣ���Rp�mMS�A7��3��kٻ<X�
B�~��{Ū��?X}����O�|_,��&�b��v��W��Ժ�/�Vc^O��E�[M������yrT��ҋ�w^xm����eW�Z�[��Y�y����?���Qwu��������lD���=Xl4ť�beOÎ�|��p�Q�Y۴�L7�E�G�B4�V=�ڒz�ْM!�<�F	��B���A=X�<��<E��ք#낂/Ǟ�\�%��+����~Iu0\�6�􍾡����z�:X�-.��e���ݣ���'n��7�7�9�Α+���Y�v����WW^�0��2֙oC\�&hL�Ql�hZE��)����}�똖��������9��>[�𵰆K*�lS�6�8m��K;DK��h�f8]�R���93������f2]7�ƥgl��
�_�5:��\Q���cJ���\�̎�	r��#����ouZF��=U}>7�ڛ������~�z��/�;&�Z^[�9e�gY��x
.���9і&Α?���o������Sz���P�8�`8-�sI�7�Yߏ�
{��G�{�����Z���]z��l�K���7OZ�t�)����֓[ת�E�h�$��4���zƷ����B�JSyRo�*�_Q���~����VZ5�&�x�I��k�g�ڦ5�z'#/q��,.h�Xf�>˜���e���-"�פ]��|,%�q�H�uq6�D���n16�W�+��Y�:��}����;�$��`�x�~���>�RJ�V�~��������[� ����+�B
�����q[||߾�?�B;;B�-ι���s����NǦcN&V<�:�̺Y6*
����%��{ft��\�\\)�TGt��KO��]�l�(�,�rz�ڸo�_��y���v;��S�Y�2Lf9]v������oݏ´ŷ
��f��ep�q�՜/v��~�X��SM��#�����������۵܍�d�
{T�9	J0$tM*�?��,�MG�2�V�<ު�&R��@���IW�2�	���y����
�M���z���T$g0�㙲���=:5�6�6�p���j��_��q���N���⑄�%y��Bҭrc��y�M}��d�R���ove���f�������,�)s��Z�޳�Z�M�2G���[��TW:���z�^�p��5������sZ�Ȫ�)��7�X\V���8�$�J*3�����a�JL���r*�:LLp�bV�l��%�t���I�@�NA'���Xi0��#�űS>MW�)r3��D�/>֌jG^jﲴ6<q誷k��5����N�D	j�
���꬞�ե�O��;�xeƽ[��^nJ��~�S`Y�$����3�cnj���أ�v��뷸N����[Vxa�~�K�'�$�=�tz��v���M��E�2�v�*^0����TS���N�ߓdXn���L��$~䓑�ے�w���?ou�h)0\�{R��36�+ϟ��2ck�e�'����Й�N���9�-g�諭U�[�Ǘ�ٖ�[�}���<�Ͼ�k�z��}�=�)�=���*C�j������lw��"���9�s�_��>	��}��s���l�['�}�ґA!NKb���i\.�Lsâb.Z���{�>���.�a;�NcJ�����\�������bf+(�_��H�0���S$UsX�٦�I�Ev_�~�r��"��6�M+m$OĈ�ٹ���9�-��;v�\Yi��Jj�4��Ӱ�LO̸^�\h	ԟ%r��N�����|���5�8MT�8E?�~C�2ϙ�饚����n9?�����Oϝ����N���۴������v���QU�g3��h��ʌ��R��V������qE�@m:���.V�o�єI_�(vm[^�����N��;E]�yr���:�S��ɮ�E��&M�H=�`�"xq��c
&����S&h�$���9��s=��q9�w�ik����� F�H�tQ�;ޠ2����D]&F,�ۺ�qc����G�o40��6?���R��ɪ��|Zw��]{�i�����5m.
mF���D�&�KM<���8�'E�t�r����b�L߻sET����k�x�߉~�MVP����̵fR,�B�ֳ&��bU\���6��mk�?��1GCR�@�� %g�Wr������$Q"v�I�U�J5s�ܳ��5E?/��߿�܁5W��M]��l9k�����^�3��e��Ï��V晜�S��6�@�c�I�W��W��z>�,5ڱ{�#�g�>� �yB
�~y�ӟb��st��8���tf�����bvΔ�%��E�J:����d.R�P��.�*��z���n�.��y�"&e�6��b��F	V���g5��	��4I�_�8��V�5��&�MS=�lgYW~���IK�^u���xao��gsVGk�ܴd�u֚�-<-�'����-��S�+�7����~����rƠ^}�b�hp�#�~���;��O�xaZٲg�\T�����k-*��(`_ҡʐC��^x6O�{�ڵ�|>�J&�w����lz�l}V�B�C<���w�UK��zI�
m
?�:���ַoW���̥m���������5�[5��fh�r[<:�s�ڥ�_t~x��Y�~��)!�c��?k��<{���^Cc��Nw�%�j� }�QKL0(�
Ս��ڱ>�`�$��[�=b[���N׏`�MMնެ{9?yA�c�9�I��c�6��*����J��fϫ���:��ή�;�5�Cj�����v��JBNK��q4��+w>�`��Λ��j�������v����Ԯ��\9/j���E��l,��Siƶ�.5�����B\y}��鷠��a�z᪙������Y�s~���)0T����e��e�T��&�-��6�4:NXh��H���|��%�o�A�\�C��)ED�x,�z��R�Đ	E�o�~�7K��ٜ9c�i}�S{N�9�۳����}m__[8F*�e���PY���ϤԡT���!�eq�P���?���ng)���v����éR���c��4Cn�l���lɡ���+Ԛ�2�|�r���S��>=��Qbڋe��[Z�;�4
���P�"�K�X�I��8���򙃒�
�'<��������9�3.��UI0�����O?/;?���xA�a���g5��򴯰�J��l����|�]�|��ߧ:��?ʯջ}/�������l{��+�u�
��=�+�SL�������=�.�ĺn��/?�|�ؿ���� ����Qb`X�sW����zn��'��O����N�NM}م+3���3Ħ�ʽy�g��S�L�|�\N����応t�\H���N!&�3��/󻾌�-_�x��M���|yez����E1��T?3SZ���b�P��������MM��QiS�7*�ZvA}����1���P����%W�⩵Z��_�H�h+��}��&#��՛5A�������n���R�i����;���Y�ۻWǇ�����J�q����k��R��#�y�I�E�m��'m��y,sӖ�W��>y�V���g��V0I��T��3kv/�[�����'����4鲖{�W����	>�h���QL�0����\�mĝh9�i���$}�Y_�;,�<��a�x�(���[ ���o���v�Un���_�-�u�7��h�a8�v׻r�F%�I�n�)����8s��s��I�T&�Z��r!aQ��={�����]�K���������Y.����>��8����к�P!�U��g�=�j��m����;?sV��������r[7���g�Y�*g�Z�j}��[�Sz����8����@�Zm���ʞ��i�X�n�g!��>���U|
� A_��
```

---

### `objects/59/6306e97e1f53b4a25ff72e5ceb7401482ab09f`

```
xK��OR0�45b�����`�����o� �1_���}�g�b���>�7߿'�����u�X���R޽{�HI�x��������L���w\�X��]܋O600�tt�޽{�������0�zyY�Q��F&���j>3�X8@B)''��P ���� �~����j�:8���e��,4aK�Rܡ�?��w̓�:�� ��i��0�G0�}�ȉ��������y�3��6�e���E�q�>�PӠ�N?�w�h5���Eݯ��{�fմ�5GO�����~��I7�U쪹}���̀��������r~�]�U����x��.�dϹ���?��_��_���{�S����s̨�ΩK3v:J�(�;�}�m����Ђ'��Vz��՟y��?�b�du+�?_�~U�)��	�r���Ӝh홲�����eگf��k�87C���X��ʗ�n�^������G[7��	�&��k�Ǽ���~���u-[��x�h�*��,��n����Ui�J���__�����L��;���|m/��������\v9~y\Q��M�����z�ߝo�n��'��9��[���lѥ��C�[����{�,mgؼ*��Ŵs�zox0�����q��y��2j9N�Rek����h��H/�}���7��s�6���%��v�H��d���h�c͢�起&u�Uq���߱gSn��6��R��O�07</���b��׾#S���껲����ywV���T�_y�m��g��������=�kx�9ۺ�*+
O}�q����ҧ�E�k$��>�%+�r����WC��^פ��?#,�]]U"�n��JZ0k�����"o��	_卋��`3�(?τ�O�^�|Ma���*��S6�3l����y-�,q��c+՛��Z*�|�0m���S�ݚ���=�ݔU�?�^�2��lu���(�Ǎ�/��֬�Z\�6��i��O�뮞�ۼU,B���	�d��3�K�1H��y�~�C��S��� �+���0<�� �[�ȣ��*oA�a�k7�	(9h*��E;Yi�~鴿PX)��o��
w�]����|U��a�젿�#���{ڳ�Njj�=�iEWk/?_�����f���g��m�N_d���!�{���e��bϾY޾�?8�������19�ʭ�7Sx*��خ�x�ks�������Z������ֆH�KNL���m	
���姈���w��*s2^�5ə�!U�����?q�/~��
��X$��1P{N�g�P�H��ʴ3+Y�.{WxM��q���_�=�׫+�����c��}�6�����Ԁ���3?�����eg���iPF�}ڊ))�j��=���'5�o׮��������崕�/w^�����ݩ/��Y�_�����d�I�K;�NY���$��l��ؓ���2(�Eԍ�j���#��=�'#@��s~\�#��%z�F����ԕ,���1�rc�n��y{��������c�럟��_��������??���zMٴ/�ς+\���"\��ГM���v��r��5�A�����^�ْs\>���5Cu����q���q�V�e>`9ͦ�s$>��s��.��S�*�Ed�L�9;]�>�@�~-ue�
��!;6���Y��"����5ּ�w��{ٚ��������e���̽�k�;$�W�haLi�,x��6��Z�
zf-a�18�,tR�נA��{�Ƈ�<�����l�6�9-OTָ1G-���j�
���[���.���}'��k��A3�Jz�f?��gk��l���Oۓ�����'&[g)��
�/�{�)��ꇥ*���y�X���+�����0��Wl����g��<�>{�+no������Lid3{�M�[�������7-T���n�p2�׵�,d��ȦMѡ����{���\m}�=�ϵ'���6ucwT�g�s|�ϥ��w��?�Yk~�c�Ǆ4N���t��o��m�ku������yׯO޼~}����W����������l��	ٌ�"��-O��+/�|w���ka���N��5��$�*+���%�\����?��.�l�dW�����/�Z;]��0�"pnF�͓�6�N�(�l<�঱�^d����O��&ʹ�����P{/ÅsG{D��Z�� b ��館��4?S3�����[}��o�(9��/ϒ� A�J��~��?K��_ýK3���qϩ$�4�����gz���dM��0��6���[y���������_�}��Ya���Գ<�7������ޣ������VwI��l��r�����W��6Ub;�Ƽ������U�/�Z����sm���������4r�1IP�`<��+�Z�$����7}����u��S�o���J����F�O|-�f̸͛[��������kE7���
���&Tc��է�]K}p��#3����F�jO��[�I,{O��I�s�m�.��|�G�'�a�8�d��ӕ�'�*�³G!�A��Эe�n���s.ii/W��-Ӻ��`þ�_^�;óN[[r�r��/�_f�_�^��|���7[����:�ˮ���1M��������u�l�����?C���|�>3`�9.��z�F�.i�M�x�J.n��ya���F�B�V�sH\Xp��F�+	�ZGG6+=%1�Kɜ*l��%,
n,��e���2GN��"w������?&L���7����^�ݯ�m��7�y� �E��Ǭ��%������6�(�����%v?=tf��P^cޣ�3�f���e��z��{צH0$�p��]8A���K3N�`���q�!��vf.K��8Dcc���8jɻ��c��MS���k��|�o��o������3c�����_���>�}�ҭ���g�yM�ѽ��]j�*
(,�_���g��J�����j�s�C��4���~����}%�$��z��#�p���}\Z��}�R��nh����G�g�0܋�"~d�ߣ&�%1߮��<���Q��Y?�L�D�5�@���F����-�O��w�d�s���D�7ȗ�Rhε%�c���GqU�����g�5�������Rc�N��
l-������+�y�k͊0�
�~Q��t{�S���]ys`�cs7�47
�V�cn�s���.����+�z1C0%�n^crL��R���ܠ�&����ZԌ��ӮN[�t�b�e���b�ߺ�T���;E`R���I3�\�v����
��;�wks���[ǎU�Mz2MR�qC���.�^�վe�V����iǆ�?�|N��fULL��������}�Q���7�������W��z��/��]3���k����s.|��le��C�o�b��_Yӻ�����S�G�@��nqG)��Y�]�%ػ�׬Ґ��\h��p.$�/�M[�ת�c3WoR������(S{��WG��^}���ԅ6GI3GՄ��j��u��ƹ̬}x�t�ű����ݽ������md:�l�5�
)������2˜ ��ϭ#>i����[��n���8��JׯO��꘲a�ߛ����)���jp��h������+`��u�᪊ǉ�?-NS3���bTH��)fQL��#6�E�kYlK�3�Ե3�L^��o�������͎�N���b�s�2��?Z��:�pE����6���m'�������ھq[��T����я�������*ˑ��.��O�)��(_�u9r\�5*�K��?m׌�Q36�L����Ν�w�y�_�����u�0ܾp7�Φ�2״���{���599���e;�EF�7��~�f��"e]��t�n����Ҕ�f6O=-,>�tXK�O۲��[�����H\��kz6a'3G������w��?��WV�z��������\=�zp�K���w����y.�/�_���s�Ol\V���iU?�����yq�M�_��Z�4kށܿV�Sísw��YR�|��e��e�f�S��ώ;�ͨq�&C ���E�r�#�\��n��R��퓶���e�(ٱF�ɵS�,��ni����h_~��a�r�/j���?�bt����%���&�){�Pr`����j��+;���V�wdo\ʤ4S�"�d�4��TU.z��ު�9}���~�Z�����U�����6 ���j�R�e�=��Ȝ�`+�^�sRΐ�%c�ɮ�}��׭[.&�r�f�ے��O,f���fJ��ܷ��ku�c��|�y�j���H�fq/"z�W��͵�bO���|S�y�y�	���v����]�ߞ�����Z�{������V��1�e�:�V��F��&+�ީp�d�M8�%V��U[����:�q�ՙ{��|���wcKy�����Z��,���vAE���K�Q���SھB\��|��`u<5-���O�IoM⳩��I�{���:fUF�aߴ�̊�]�^uɳ#w>�ۺ�����w�Y�>Za�|F�t�U}G�k�PuM��3����oz�o�iؙ){�1D�u�����[n�x�����~W��A�m%q�p�)�:�[�V�Ni��ܪ8�4��6bG����=/�2���Q'�I���^�ŏs�R:]�Z�qݖ5��=��j�I��������y:�i�畾��R?�Vi_�'MÍ:����i:|��m�sYs��r�V�[�e�j5���v�m�N�T;R���^_�kϚ� �ͥ9��W�\��q.s�\@yX(�W���2�B��6���^��-�[G�i^�&�H�9h�vɜp!b���l׮MU���|���Y�Ӫr�'=.��<w��zl�p̷b�O����wJmRI���(^vY_�:g����S�7��>7�8�k���OyL=�:��A���G$�쫞t7�f��z�R֙}*5ɍ>�ګ��Dg�>���X��3kt��&�&��7+?㚥�����9���.�ZU^�f�֧�'W.�sd���{^bӒVY��5?}�������u)��otc�X�����y��!���3��Ju��yFn��Q�&�o��M�X/v�fDs�z�m�a�顴�\��g�٢�y\7u�ñ]ʎOѿH���;��X��#6>��	�Y�X��$�[�dn�^����v�Y�	����kwf]/>w�O⬭E���,+������'%�I��;�8+�q�fcq�Z�c�\�J�$��
r�K�#�?N�9�j���/���U�|�����1n�3�-�Χ=]���Y�珻���ro���K"o6_sHk�W���ҍ��S|�g�i�
r��z@�\�Gw˶ն
=�V8��җR�,oed�8*��\A��C�瓜��_�Q1b>t�pn���ϫ-���o�j*��w��	�B�*���ا���Ȇ:g]f�6k����%�_.���.���e�bl��$U����cq���^V.��8"רkZ�L�.]uf{�㌥A+w�ޓ�[�����AG��xN�uv��\�)�C#OgOU��q|{�/C�����]Xts٧�,��o�^ձ�t�*�=j��r��J��e��ߣ��!kƮy:������l�6}�jɞc!�LN��V&~���UL3�ֹ�9Z��Qp��}���S>wwl�L�h��!˳�peNR�Ǟ����G�Ld4ߐ��a��U",��\���X�h\9a\�6l*�����Х�D�_M������Ť2s������TN
�Z5�)����\R��>j.�?ᖏ��������*� 8�����`8�v�<#T P�4&
```

---

### `objects/9e/6bcb28ca7f205509d78a7f674597b6526e040d`

```
xK��OR07��`�����`��|���P�6�ȁ���9פ���/|��[��p ������C@a擓��|fet4s�����.�pt`�{��ݻ�FA�<���&�19999P�A�G��Y�=^�����҉>�```lo�'Ǡ�����������?x�G������u� �p�q��م�t$:g����h�;=0e�o��7���U~2a�u����g�MO���Z�l���>>w�u�t����/�d���)��<癝xz������5�,�_tz���I�����+޼�����g��O\�O�,?l^y��wW���{�ln���z��ǌ�=~����%.���/�2�tc����p(�C#!A/N����<�ۂ?���k̞~Z�\����-��㞭�|r��Y
��;���^[~-?5Y��d��'���yt�&*�z4���_��fK���z�N��K���ݯV�Yׯ8��фO�A�sr`���/���]w���qE_�bV��?�l��
݇o�����_�n��{�R��=sL �����~|Ե�
������55�wb��ə�/��\��!!�ÞǮ�rW���B�lVN�w��JLm�s}ٖ�q��_\k��Ƿ��h�iR�[�<�ٟW;��{��<k�Q������������C���K�U����T?m�������Dݯ�6���G8�&[b���������X��U~ה���-w�]��b<��/U����u_��6x.�e	�/�zas������ry�^S�7_+$�ܙ/'�5m��bitT�tA��깓9 ���o~�
������ܩ���(����������_����sm����Y�f��H��o�ģ�y���q�����5�<���}lK��?�+�Oy�]�sVv9/��qf���I��w��qvx�P�[iv��k3?�{^�[a������X^4p��\�;?ue��R]���^.�j��
����3���;tV�c)7��ru�Y�N�3w��/������ɂ�JW<�ȳ��3�e���J���2����ڟ��:3�/%�H=� �郪����n!�M�e܉3w�Wl�x��1��H&��DscS�N��#�K��&}('�s"c��P�m�
����}��tS-����M��w��;i4iQܕr�ů4�9Z1~ձ\v@�c��M��+�1d�Ց�8��qIa{]�a�<[n)EM�x����~E]��g"wm�y������{_��&�x��������?��������L��Q��=gM}�򖻲B@�ވ3��3�F�&O�u[�w6BLs�ߦ�xy8�,�ޘT�I�q������ϓ���l�~��V�q����9i(���љ��ޛ|�� 4#`������m_w��[���������{949��0����&>�ڐ��� r�����w|wNޒa�J�2�f���Q�:fK�����v�h�phm�PAb\n���yo9"���^d��,*x
���W���W�Y������]��y��[��0����pY==5��y��W\t�������݉n��/ֽ�)��Yr���������o�����2.��*E�XXty�����0� �R��f�b�Km�aG��:= ��k7��ax�uלы�#��� �W��l��';���(G���̓���?g����2Zyz��R	��|OyY/�	L
���ˊ:�i~�i��=�S�����w�^pg�W��7�n��eRQQ0yQ�bȻ�N���������ҼE���Z�e��V������W^)��r^g���T���y�7�R̫<4�`�f�U�f�$*r%}(Jq	*Y)b$�r��>��w,wO|Zy��T�#��ʬc�*�L"�{8���5Mg�����{oO�<���i�֤\�-�.�v9���t��Ġ_v�g�>��u�������M����V��`�҂e�%�r/�#&�,q���B�o����7i�O���6�ͼӠ{��Ư��[��8&�L[�@�����wC]%y�u:s��같%�CX�2s��-���U$�2���)1��*��x�Aw�h���.c�
�u�[ɾ�皮�'9Aa�\@j�e��ԐȅZ�
���hds��x�þ�ݶam�щ�Udcn)�ёT1Г��=�b�nq-q�	�'u��������i��1E�c����ǆ*0{e1�4�k��nP��Ŗ�8s��U[2dZ&8x���9C��˜���������j�Y)�6L�-κx(��k���Qw�/�*��?�iڶ�Mu��.o]�9wŹӹZ;���]�g�&���=q����S5��,;*r�����_I�$���pIYC�f�B�Z��b_��,I5�a	X�;�R�d;j��o\>��KH�����O�O�2Y����,��bՖy�Zڳ���e]f�}���j���O}�<P�O�;bĴC��C��bk�#ˤ9;�;�&O]>��}��y�C���J��3��ĠK���'�$t����73�0q�������u����{q)�i��cRM�.RZ|��i�1[�<�T��}��=,"�r�Bn��;;(��*zր��I!��C��UaT_+ꖾ�c��u��O���>2Z�ubz_3���m�J��?S8�$g(���r ���W��N�>�v�NQ���|����*��ı\h��/����5/M����}���o��wS�}�n|��V�[���ǜ�fU>�q���gL�'�"���OvqG2I.?��n ��9C��6�bӁ�.�u[??P�P���S�ϻ�%H)�`A��8��_�[.�>M���B+)ͫ&�,y���Yw�)>w+�Cs�V�i֝�>��?Z�V��sw��٦vJ>>����KK��<���|�h����_I�霵�h���yŹ������5_6�y���ȣ7��V��N\uLW2ۍ�w����	;�VI����������DuѺ�=��|���v����O������O���qכ��I��cXQ���'e��ۜO����On.�כ���í\qc������'�/��|�!��h���E�ٷ:_�{���*��;o�~K�_�j�S�r�|�b���_��yD�}Ҕ����?M
[���<-�icGNH�N3�t�OG%$/6�39�nN�n�Ԧ���ҽ5w��X"[�2��׿֓u���y-P���x)�=����댒3v�%,f$8N���Q".���	Ïfy^����}-/����}�#������o�[���ߪ,���չ�z_���.����;^O���Ӣ�A�
�OkMY�˵��`f��	�k�;�&;�Ηr�ں�ۨdU߱3��<	Z�1���{뽓�����#�P�Nvӗg
�����b�<E�H�s�&y�p��<.�0��e�*�����J��yO*y$O��oے&�Y��M^���������ۺ{��V�����;m:�2�1?��sU��z�����:`ꕄE�3���J25=,��v]���;��S���T��7y��;&m�6��=è�k�+��/��)��r]䢰`RQ{T�U���mɆ<�s�������d3=��������.}��+²�G�Қ;��Ϫ�s���Bj��Ow?|��E���HД���e�n6�����%7���ɥjN�~�*^s��� ��T�\����ޔ� �xӰk�J;
6�yt��g����nUo�.�m���L������Y�\���>_�ɬ	X�j��3�0��#�"�E�|U����{��E�u�����s+�寴���������w��s��%����f���p!��?v
����O%�u=�3�����qc+�Ӛ;�Ӵ	�!�4��<�p�9;^l�iK���u�׿Zn���xobM��G{6(?`w�����/5�X�tǺ"]��uI5�.�Է��_Sp@F�""1����g��M)��k+\��_c���YG��X��'P:�ͫ`�K����f���jq�(Wh���7&J�tQ��r��s�7	�����F�Kx��ܴ����
�ɖ��+��~j���1���m�4����~�{����͠���S�����;�.��cm������
ʂ&�b�.�����`�Ԭ3g�m��F7l�*����2E�|�L���T;$�c��-ǅ�{�?����?�+պ�*g-�'��:�yA�����׫���]�j�^��i�~�M�^ca����YU�d)��ISO�a��"9L慮S"GJ}Z�̿k���׿������tɩ�]�}�k��ϳA���?�-����[��.�
jc�a5��H�܃�\�V|�O��_��uۃ�IJ��)i<0x�Q�7c#Z�fN�������Q)��/F��ҷ�<[y��-nѰ5_"�^|{ְ�n�{J��R۫Z��^�q�z*�U#��6!�G��Ì��~x_�]�S}��z��/��μǢz��%i�ڧ��V��.�5���"%�Ur�s��K�O�m��d�p׭e���)�+l�f>n�L:����e�H��'~�����g߽�6�2׬�Js��>�����Iτ���������%����������z'��h��5{�͛�wo���jw�$ĨV-b�I3�9��U''�5�zkL?�.�Wt�����g_n����<I�X��sM�������uB�+j��Rs+w�x�ɚ���Z�_�0���PXg�ACuKY��4��o'8̝�����K*���R0\�����w�?T���aɯ���������%��Y8[;$|	qtD��Ȼ�[���6�Oe���?�=� 6'F�Olǁ�M�>���}��.�.�?:�j��s��h��cd7
f7�>��۹]�O3��UV��jn�#�z׻�����4]O�9��&�����2a��sב�g>�� �)Ӥw=�r�璭+J��Ι¥ꕬw$]�!��U�G\�i�D��ƃLwNdMϸ���*N��y�ӳ�v��v���U���6�f��iF���-J�,Lc8����\=�gGⱾYN�b+�rZ���aZ�o���9�T�ٝ|;N��v�pӓTۙ��?|�f��?�Y�KR��I���/��] ���9�;�b:_i*,h���Lp���2�����u�d����ƼԦ4X;���ά����,t������SL'��N{��a#6�că�g��R*Y3'�ܘ�1[Pj���F��X^/kS���m���B6��n�jҼ�.��ƚ���x��[��4m����	�\�X��|m�XRZ�"?��K��o2�18 �p�|����z�߸�Z�����;�+9ZҦ=R\��N͇�O ��cC��3��>�ZJ�W���=~��IT����÷���=ކj	���4�����S��M�%{�t��};F	�|�Zs�7�ƻUkC���N:}�t��uY/�6_-��S�-�pn�� ��	6���]"��ex��W��U�Kp���K�b���b�mYsbYɦ�
ߏ��/�����!q���Y�.⳵���x>� ��ʂM[�9��Ps���������VDƷ�X���-�����u��u�xo��3�V�#��O"�l*��'��&-{s.�Ι��kΧ�ZF�ͬ=7����#��O�_N:�x���u��/ݫ�Y�_1}�u�rծ���M�,��:��ߌ̈�iaO��Ru��O]��X�)Qba�����Yś
E ��L�+a���)��!���F��m͊(�	w�T�ݜ�'6n�X����G������MM|ݺ��36�M㾝�Y]P$}x��s�s�Fm:���������]�i�v��+2��[�߯e�������Y�y�*"t�_�(mW�Ә�i��Ƥ��{�w�]�̴;��&�
`j���9�g�����3M�~�-גq8�S�E�W����@�֎��P���>�ל�u_�V���?�3Y((��f�,݀�������_j��3{���nY������>�����|>�x�]�wֻ��C��|�m��Kvv� ��R��w脾�8ӹm+~9����R���7���y��F7sb�nm��v뚭o��PS5P�ŘT�t���y�8m���L��}۹�7�܎/�ۭ�T��wy��*�~90T���kr��H��ε�g*�ȵ>__�镛Wu�g����w�?�ve���D̈́��|���6ܶy}�s��p8�=�U�Fo5�8�9�5W쳼ǝ%��ʪ��ߟ~��g���>^�ְs��ev_�%�~i�lۖz�|�&ވ�Nj�bu�3��3I��� ����ᨛ�>�:�fK�ٟ��"N~���%e�ɶ ����NRa�f�3YU�Β��O�e�Y�hq��,b��y�Sw��uv���8s��d������{�3�6��Q�J�W5�̢mB~�iO��'�Α�J]���%t�����#�'��]7��X��r�~va��m^��f�%=�Q���ap4{�F��Fi^y3*��-�_.�����䫅��I|a
)H��V8���XS��0c���k�=Aa�M�����ՄoU�9��t���?��������nm+���[�!��W+��ڒUK��TV[�|�̩2_&�t�8�cZؼ@��B��s.Zr�'�U"���J��A�rC�v�XѴa��Հ�g�'�
+���~Th�n��O���<e�n�)ɫ$83Z�Z��9�������w4&�nӪ�޼���I[k����������yӷL�~�IJLpZ&s�hF�#�Y�}~�)�?E��4�i��!�CTh≔��6f�:�ǵ�.�^ԏ���~�{��2��[dB�5�?���{�g��?V��Wo5���?�כfg�X/�U�k�~O_�|���^��^�}*������K���M���D�G���+�3sc�IS�\���Ϯ�$f1��Vf'�K�����~�#�N����P�Z��}7@[$�]���uKv��}�룠����9%�;&�ޒ�V���"E��976�^�⼖ㅁ����Ira��:\���y�p�:[��"���:�����wEgI�䓽qZ�If��}�.��Jn�j��&���!_��iA�ӏ��[y���˒��z�';�*qgIj*戞�q�����C�Fم�U+Dr���������?��v�\j���Ԓ�h���bj������[�赵��ɮ�;kZNݹ�#K�ٓ'bwS��m�����>-�P�A����ǖ��^>��ޔݦ�ɖw�9��L]p~����"vϬ�z--v��>�eW-?<K�y�;�0��D�
.�-7���7�+��ݟ3�&�S�$p2�d�v�gHp��l�'�[���1�%��%��	r�G]�/�|�Nv�8)�ښn���W&�/ڭ�&����eڴ��`�6C�[���
�B��m�q�74qE�a..f�C38856L[� � ��߱��W��e1���u��Ԛ���ò\j���)�
!,M����>����z�������L��p��.��\ ����
```

---

### `objects/6c/94d83f442edfb176b251a25df35c7a2831128e`

```
xK��OR0740a�����`��6�a8pfG���u>��R�-��l𷲮�{3���S�c))�(�c�z�IP��ABBB��Q9�B#�BS�ɛONN�f``��pR�i��f�N#%%�����]�����{�߸�'\߽{�&AAA�D�wo~�VdQR���#_��`�n���~�)��7<h0\#o�pX�I�_bN���9�W�̊X��I�����}� �˪;~�a�}l�Ą���6�/8Z�һ��z�ԫY﮵J�>��j���;��{$��9z�fk�Q�2}��)�=%�b�����r��H�yu��2��+�W�{\2����W��>}qߔ��{D����f��[�_�20jr^�U���SC����a���Ӣ�y�Z
#��y'�,l����ȝ7A�m�cc�D֌=7A�76��e��mҎ�n��,
���+>�(Ɵ��td[ե�����X&�]���w����������Cw�.ް��l�u��{�+'Z*p[jv��P~�ԹޗL��홖~#�����7|l��_W�j���"�,�~(��c�q�U���F������-�9�I���۹O��Q�q`\p�Ā'�Y@!�@�)�!`���c~� ����90|k�c�ʻ�1A������ǳ�G�줏�73o�5x����>�%"�<0:]v�+�3����V/�S~��U����خwHѳ��-�����Y�,��G�ˏ�Y:���������\%P��b�qo�7�槨�g�;9{c����j�)���_y�% �4����s*��!+ϰq�t?���afddy���ru��[��X��/��·��5!N������M��p�T����	��b9|�W��o�
Gv_��x�Ӻ�77vM�r��4�M��-7_w�^eL���?G���>��-u�I��;w�0VY�ȗ�Y<nQ����[�;������h��H��ή�.'�x����±�����흲���S���gEH����`�gpV��~�sҽ��i*m� ����J`xr'����%�Î�������UX�z�:�V���!����'[�m6[~Ojr���s����~������ۻ筩�(.����0�d�k����R��=����گ����n\�9�|�K�1@�UQZ��$���j���?_�tb����#�Yw_O����^������_���^ٰ�[0,4(kJ*>��cհ��� ��9���7��/�[�������o$�x������8CCX��3D�y�$,�`��c���c�����b\�b��O��������k��sE�^���~W�;my�x��U����X��:t�d��;�v|�^Q��̲�C8�T�cM�D�i9���{c=����|۬��?-8���ҥ3���0	����׿��'�����<��Qf�q���M�Z���B�/��0<7��#���"c��Zj��|�%��ܵ��e
��:�=V%�XNrzt��عq���'�C,�UdIF}�c׸���b�#��W�͹��+��T�����2\��_��|+U����LE�x5/�{uz����ŕ�O�j;��]�b���o+
�ze��'T/9�������G��]x���Q�ފ�b�UN�d�ᕭč>�! ���(	�0ܗ�!��X,�y�F���B�6��9ד>Pbj�Q���Ff�8�]���|KP����=��Ϫ����F.>�f|ﱘ��v��r��z�O(�����7���e�WF���J��:��� жymV_��g�j�m_�Dv��J�ُ��t����3�x����Ko��VcөL�\3/���ܷ�\׷26h?ڠ�}���Jz ��8�?y9ˁ�*W�{��1~t�X����7k�do�P#�¾��N_�B��gV�1�οmP��Vb�5�ɚK�|xt�B�A0s��	�d��=]�����nȻ�݊]}�ٲ^��)�'3Ԥ{T�X>z[v�����Ш��mn��-�V����c��j[;��
��L�����K�/]���X�p0�<��~Y�"��k�v�p�U�O���zͱ�w��<�#��/���ٳ��O��6�x�������
�	���d�3N9k?��V� ��n+_~Z�s��J��ԅ��
�1��SQ떻�73���O��H�nXd�u��ʶ�b��/��m'~K��4����ߏl������8��_�֘������~�� ��.QN}�3���/��˪��ڼL"�</X~i�m:�zxSFHb��rD��$61��~����N/�c9�X&F��UG� 1S�(�.��b�?N�9<Y��[C�I��+�V,��K���Զ4�%��ʘv��:e�7�������MN�V�U���t�{�c���<gg��'����5q������v��m���ӆ9g��
	�P)	7|~��O��g�
!k��U�Onka�6c����,]��и�!�OBɊ��Ȓ=�� ��������T
.ȸ�p����a���9y~|N���{ާ����۔���,f}�:+�SQں��.x��[��QE*���[�9)=������гSg��ze�
�3Z�Vbw�*;4ܘ����@��36/zpa���.�T'%#׉2�D������e���B}uRõ�='�[�=y*�'B��`�a����0�2Ek��1׶�es�h}��5������Y�x���xj����,�j��x��X.K�����}{��������۾"+¬���ڗ��~S�¡��Q{�s�Idm��Ǳȕ-�)A��M�Ǆ�0�Q7���tk�]KbD�vG��y�aѻ7��FyzĚ\��w��f�L��u��w�Wz��G��]
�5���B��ԛ1����jk����q�D/�q��>**����^#���{_ȭ�yB!.NU]�_Y�2AC;���ۡ��)�~_��v5�ۜ��*�̃L��"���Wy1j��t�k��?�/�q���L<�xٲ�a��.��m�|Yk�lz,�:�Ԫ��*St�<�m����xr�/7?�B�+���
����VԔ�p)`����Ug�<���]s^k��M�E�45ս5�jd��;��2�F��.��~����Yȕ��)����璎�����KKf�s?Q�X�l�x��=
��!QB3[�%/t-52Lp���̑9��̦����(�����uD�i!G�љG�v�� #h�ⲇ㱌�@����U��NJ����%m�S��e��U�Rra8ql��S��w.K;��)k�&��'to�\}s�Xx�4��?�=��s^���<��>\����K��7k׿�����]`�F���+�NI����>�,��mA�򻝧����=�0h����������L
x����.�:a욓���������^��U�u�άkp-8z�ҏ�"\�K�޻���?��ϟ:��ݩ����U�1�;�>_-��~ݕc���-�,]�|F��T����9Y���,3��7�{�ד1���J�������5�������o�O��0(����I{���[�G���z��荒Wz��~��y}����o��iq.R��Wc�V�����/?[�u����o��Ȼg�����S?.�;u�O߮,���=�<�\:#�~��k��_UiF��^:��
�~�9B-arw�J�-�n�"�h�x����=b���V��?<u���ܥ�;^�;�3��\������
��V�f�FK͇�
�鴹}LҺ�����n�At����}�R������W�������9��l���.H�_��P>�R�w�Gҏ����z����Y��-������q�a����^m��w-h�^�͢*1'�$e���/��4��;n��Z��Ғ�E�Oe�T|�w���J]��+'xn�
����St3Z'yh�}�f��͒O�'C�7�uj������~�N/�g�\���ǆ��l;�9睊gڽB�p����G�~�_��H�����\j�[}�a�⭨;����Uvǟ{��gb�������������^��\c�4��/~�߅G��?^�Q���U5�0�a�vw�����~�k��ޝ3�5�vg�T�$���,!]G�
����FLH(�txG�^dr�K������u����vE��#��3��>/�{j֬�rYǃ�\V$�z?�Ɏ�r��v�<[�U��W|,����/�j���>ۭ����^k>���[���}��-�Z}���hA���_%dT�/xnU��:�isx�0�KLn?����:�E��_���Ob>��
1���e{�?�X��z�4�K{3����/(���h���;.�.o����OfG�n�S�-�_?޹��&�
�s��r*S������s�3ӵ�B��z�g\_�����z���6?~�Qv@��u�T�&��D�;���:���������Rw�V��[�t����*�'n�|2��yi��D['�&c�7-�r-�@�7R�.Z��yc���N+������f<z?���g|��UG'�/�U>���뿍s�e}ۚ�-�W=�[�[�����?w�*��Z�?�f���z����X/&]:����ĥ+\������p�ǻ��Jy����'����2^�����S�ut���#W�,��9�(j�e|��@K��uB�i#��!�N���:��Tk\�$��|4芕��+ �G�.�U��%pw����Һg�$���evʄ\�:���纶+���Y��n�\Z&yeU�Jqԥ�&g������R�,�E�I+��R���D��*m1�u�˳tŞ��r����>�Z�B�έIO��V��k�0�Χ��tݾ$\ܩ?f�����D�hE뽷y'l,pR����
n8n�!���������ѱr������[������t-�^H��D��ʄ1J�A��}�˂<��b����뵴�|�pr��4��
N�+X<�W#t=7Z����;�O��0m=��]���ˣ.sx��Y%�}m����;j��f{$�=�����fwN:ff�=�[�����M��ξ�4�<y����&x3El���.�!$o�Y3%�e�Ü�_W�Mz�[��?�=���W�LJ*2�**_�
r���ƙ'�^{�lvR��Ȼ�>��ο���x���ᤠ�*aSERϯRw�X�����aᾹ�z.�I�3č��O,ٴw_�~����.D����ؔj����N]�#���j+��_��|�%�+o�o��o]�����;�g~���=k����b�O,��a�ڹy�"ӿk�G?ߴ��7�r酡ZT�����9wtE���?nKv�]�_L��[�
��o���me�d��t�0;�>ظ_���r�+��������q�X�Kw��ĪY�Zw���8���~����]��^N�����ꨛ�\���.��q���Ş�������N�u��0°�4�r�����G�~�ן(ѵ\GV���Nv�K_��`���T�]�E�w��ٯZ��覾������D:T�ݺ���JXoߒ��5ԣ^�0\���iō���꟤�����̾�W8}�Q�mIS�i3�Tf؞���ɽG�U�J�z�L��ᥬ�����]�L	�vJS�xFNZ@U���5o���<�����̖�ڲ!ǅ�1���ny��Z:��O�כe�����x�͚��y���KSm�H�/z�R�˿�^ɓǢv��ط��sQ��<w���6w�G]_r���a%
��g�FF��r*'<����������)�����]�����B-�=붭�L��y�qUz�����ݸ/�>:N����3'���/�ڛ�+>�x�G{�^m�1�m}���7��ܽ{�o�aޭ�F�-]����N�4e��v!>�}����t���v�y5�Km�~�ٓg4��D���͟�8I�\s愨�@��e��:����@��n
����y�#{!pۛ�CKϞ-U�k6�r2��k������za��V��]
~�^��ý1��{��t�ބ��?�#'?to]�me�Ы�Gį]��o���a_ͽ�O��6�4�������
��+4�;99W^��}~�����f��V�h���s��kR��bi��p	�R3�6�3j8�=�bF�qnZA`�M�%����/Q��I��`��y����[��Zs��=߄�Gx\t(u+I$��J�7��r���R[]�-1[�Bc�d�$���Ӗ�-
�UH�k9�&�����
�s�\�������W���e����:J,�Ȟ��Ʒ_!qy{�g��Mٻ��Μ՞jMN�(�^2sK݄uk���ɟ�.�Lf��ުf3���{��)~z�SY�����m����e�� �OPw�b`X�s��ܤ�ϳG�!�œ���������}^���Z�����kd�h�<��5Q?o�۔c
��[;�T�z�����=�x��.�ȅ�H�8��NRK�.,{+Ҟ'�|���KQ�#!/�Bo���u�l�\n�>6I45N�76撕��Z�����Q�X��͚���l_�R��dL?$̴��v�}̊�C�Mo�)˧�]��p��' �/Scb`8�v��SCk�ۭ�͡��{��\�5�����!S�@��,��-W��J����G��q�c�RǗg;��m�2aS���솉n��-Z��w��x!a��T���L��Ӄ�k۾���V�Z�SÜ�3�u���@FI���/�z8ok���
���ȠP�	��.�������Α���v"ّm�
W��?�]�FÊ	����2�N��Yp%�u����S���z8cbT��d�َ���Z�V�l]3A4��)�����2Z�]��jh��g���9s����8�U�BC{8x�����ܖ;s6<v��©�������ve��3�&�2�q�u5�340%��]���*��d�B�FK�R*8n!���Xn00�E� .�
```

---

### `objects/a7/22739c709003c55be0ce62d1dbd1aed361b200`

```
xK��OR0372`�����`��w�ca8سӍ���e�ɛ���r�4�~�M,3s`�*�J�d�v��0o�Q����������8|*_����@�����w'041
�0����|;�C�M�����GJ��{�pH��C=����Z9:|����Np��a��x^ϗ����/��Sn~ ����\Dg
�YMљUQl�tʊ�����
2�0lQ��r��������{�����Zŵ�Wg}<gzs���b�%V����s�Ye���i�Sb$��l,NO�&��iK��H�Aó��7wJ�Zr|O߷����%�$#E��S�>��D�$��k��2s��%�+?>���Z�kg�MPs��]�qK�J�N�`h����廁����)�	;f�SP���<�oA��Ɵ�3�v�Up�h�����+�y+X��x.�� q������gO?lKڡ�h��a�!��0n���B��I6�9��j�����)�>ťo���Pyɵ�2Mzx{D����:4}�ϫ\_��nz.wY3Y���ڬ����Wf(fM{�k���5oN��w���Żu{^
[_�7;���_�g������(�*!ָ�9�_Rv�ǅJgx�E�\���_Z7�
���
B�$�&h��kjl���ٝ٘ ��ļɀu��I~�Ųߖu�>qW:�TZ�o����:�j�������Fq����ǫϿo�}&�r�Z�y�[VkϹWqo}�\���3�g���:��O��>��w�Q]|��*�+9�_y'�E��``>����lo����t���j5y-�`2��4��o��i0�����b;�����<��L�~�A(M���U�3��E��0�{k�	0�,k6����S��Q�[�Xuv�m3�}w{�q�o�5���y,&���J}7�������U���B8�|���NpN�r�������K�OLHht�X3g�O�������ר�����O���2��4��5�i6h�14�k`cf�\l�����#�ǘ�0�� �(`� -�r����U�;�;�BF\�IL��>���F��"�6����]������߾��nɦ�Kg<7�v��^P���ΰ�ו��E
���n���B�ʳ7*��<�����"*��0!L_J���Ι�����o{F�S�g:G�Jo%U����I�'\�����]O��;>.���;��)���5	�6%XZ�*v<��~a���g}w��9���,��ݮI3�=^���k��ဠ�'L�j[wn�Kumlߗ��w[�*~�ӆ�Rua�ru��O˷I��ɶ�f���{����֒k��������w�������Uޞ���i@�ŝ�*����f:�=3���\��|���3zO�)��*gВd��[�u2sc��!��GA=�8E57�9r��^ӯ�gQ;~tvʦ��R�|!�a���ͳ�폞c�W�˖���%�b�����EJ�{B���[����+�����U�����1NaΑfI��c�9Sߥ���T)N���"�AO)�G�Reŕ_ךWN[�X��8��F�N�ҵ�����i��^�eG?h_����Z_���K���:��j�ǵl����ch��T�Ef�+|�_ROY���ޒה�n7�n�Mb��~H���VL�D��s�4��z#�_��������^�0C;x�����������������{O��!5�mF��/w˓������ܟ�Xbu�8�Q��%3\~uK��ȼ̪0�T[��]'�����[���կ��V/*8�/��긷�*�_��x_�P�7*�z�j���M}���(�#�0�~aU'�	��͘�aҤ�R�/a���y�3w���r9d�؆���j�������r�����3�̈��vZ�r����"����`�y�гR�JVK��~&]��i��I���Ǘ̯����U��c��%���in��������,����v���C�uY�dhz"��wR�'5E6�Ϲ��\��Y��((�0���t5��Y��i�4��
պ��0\����U�}���)�cL�VFv1�1vwsZU�6�w���>/n�7���d<p\��Nǘ�^~ej��R�?lIUھ+�t�o��o�m�^���_�����\t/"F������M�W�����U���A�3�_^4gYR�xʺ�[T6����̼n������\:���疵ṫ�5��O���:�y��b�c��9����?_��{%]_yC��ᯖ#)ņ�։�}�ċ�<BV2�r�hO�||��WU��5W����uh��9��G�����G5:>����]�_����������;[��m�-
Z<�L�]ٝ�wbwTH[�,�q�<�Xy��tb؞�t!r�������>O��>ί�l�[�_��>�-���ժL�Ě3g��A�Qo�5��t�oQRu>u��4�[w�b���&i��3�=%W~K��Hlo����f����R�5'/����%�^���V$&���,>���7���+�`��]�����ϼ�>w鬬"�
�Y�=��h.�Zw��=~��7�u>w�ҧ#��
C�-8ŎƼ�3��j�V�rU�̋*�
��.h%�0�s����k��yu�u�=���ꚏz�I̘z�����ݑ[�,U�mߊn�����1')��T���ޮg�#n7H:�������Fs�,\�>���Sv��q��wq�Ϙp�������'ge�
����ޘh�LҸ�>�\FK�Vˋ�kb��N0�v���W;��y����Hc�g��-��zƯ{�޲O�8�lNǊ�����������Ւ˃<�F��߮����p��ݗW�����ey�q�ܪ�j2B�v��XpR�s��c~�+T�%09��d��x��>/%A��n�
��x�<K7o���{j�e̿�A�7�j��Ȥ�e_�qu����uWN�����������:_���¤��ʜs�fm��P�t��p�+��T�������������;��μZw�"iӄuJ�
nvg�re���8�rV�����0�c�#��pK�#�XN�y�8f�%s���R`"O����:�B$��Q��gt,���[�'<���f����ov\�f�|2����6��V���<�2���v6yN�L/��*���\�����2N^����M���}q�cy '�����}'a����	�Ŧz^1A���k�����0��w���41�40X�����zѯ�g!;8Z�T��0l��Q��ܨU���CI�B��ҥN�o�tn�O;����@��[~�bw�oy���M��U����e��w�W��cPd���߸k�ѪK�~����fU������U��o-[-���e��[�Ầ3v��danx&f$���IE"Ħ�Cqס�6g&��5L��4}NnRa��~��r�T��O��z���o�^5�=��4���w8U��T���nܺ�O����ߞ�� �k�Y���?.Y��`��i�(а�J�K4��/����S|"���F�KX;ϛN�q���Z{�[�Jr�a�Љ��J8���f�T��Y�'ܽ�{?�5.�Lz��z��acx�u�9,J�
>�dl�a��]f�܍K��;n���m�Q�f��>����? �?P���Ld�����nN����~�e��L�5�\�_о�E{gU���ug��̝�
�&O�Ғ��+�}/)gbŕ8Y�99����8X��x���e�>g	ۛV��g���|�r���9SCL��g�y��tS�ӽKX�{�����|0�i��g��RM_%_0J���"���KŖ��͒��-.̫�hl[xZKT�e��wƙ�@���W\����oO��̒�5�2;W�zmU��/5�������_���?��Y�=)��W�&�wB�]d������#�g����j����z_�'�n�9����x�f�)��f/�=\�{�6���������߭R��2:�[��+	q��Q�Ӑ���k7�j��L��*O����!��У4H*�L���7I+�R��<zĀ���X�υ��
�l����Ly�j�ߗ�Fh�����;�c��#���l�[zm��U����zx�5���GV|����z��z�՚ݑ�T�Ϟo�.~��"y�Ԡ��r��L�y��%��X1%���s��k���������KjB�s�����L�\���v�����~����ѐ��ϕ��&1�,�L���Ё�̋x��y�|߁�E'8̃�ߞ���=Tq�o��<��j��R	��/?������J�c��	�N��Qu��bC���=�&�O�Hʊ	�NqY�id���ub���@�H��i��QӃo�T��2Gf��G:����7M�����sa�L�U��e��o������n}�� x���T^F�/z��_���>jꒇm�~�ؚ��ؔ8�a��M��K@��́�wo����$��!f{����se�a�=Ǵ=[/]2�\nt��*}�73��/VݭT��y���O��-۸>�8K��$�p���K}��.��tr�0�1��l���
B&�.
([v��������+��%cU���x�Ŕ慛]��M:����^N�!_NĈ�$�`3c�5b��.���45i�qS� fN���k3�9�¿韦�����d�[��:����T��'�ٺ��Һ��6V'�HR�J�p�T9�b�0[|������ڧp��Y�ʔ�2x~�`��av�ﶹ�nﳚ?w~�������W�|�*���W|h3Z��v��7;�d�b�a�ш�ذ�aE�WC��	n/�{�޴�KeR�eq�a�Sd7K��>鬞��\_ߋ΁ �_S�g�p�ڎT������[�t�6����!�����7<r�5�T}˧�v�=^[7����y7:��)G�Z徫�a��Q2JQ9_���W�K���_vyjW�W�������5���7��bf��W�j�M�}x����/����}��摺`��m��	���TYW.�`b�)��fV"�����4�E1��܍^{���7��R�����:��4Ή���YPj}�����s^.��V��̦{���2�����;o���u�n���ӗ�������lě�׹ˏ����wz�{�ɏ_ϖ���D����U�wM˷��)z������e���z���5���e�W=:w�-�]���[\	�f��
�K)M�p��ڳ_��:����;�j#oa��y�YOg���ͺ����g�)y]�&<���	��W:ʇN��{iU������
s�Cr��҉�s欸i���ٲ��������\Mx_�!q����;'s�\a�@A�������L�{�ق���2m����(f9�s�b�U�ꯤ���6v�t"K �87��B`lj2���T����7S�j>۸t��kK�����+s&h�fR2u
����3eW��=E�=ye��e����F��'����ά��]W,q=�8[D�'���N=z�"}Ϲ+ŷ?kO�4�PQ�4��ٓ/��j�+�����+��&ʺH7>�<cE���9��<*������ޝ�7k�ڝ7qi�������j�v���s�Y~Y3]nh��ˮP���pe\����ò�+c~���6����Ԓ#ޛ�6����i�.���R�����Pl������:6R�|�2_�ӗ1�)G���EO��<�%���w;?>���S�a���� y���W���|��v̭G�0����ʵ���Z%~�it������S�K��6�?Y�:{B�Ĝ���VWw�	�u��:�}�����3�G6�s�kI�v��,��{��U��W�o��`w�[$�5��q�:��Y��S'��r
�:�TK	X���|��}�S��o��h�`8�s�]y��5�f͈L���>|"�zY�����^�v{����e���Kt����?�g��I���/��Zg�;�e�w�)��3��K�k��,���۲��%I{q���f�.�I����91~M��E�*���+&�/��w���vg=�u�����ߺf[��8���i�di��,G^��X���K��38p�r�́������?�����o,�0\��ѹȶ(�dt�����
���,>�S�u{�bQC���1��ywy�U>q)3����i�4��:�[���&_fp��녭�w�N�����ЍKU������������J!j��T�\��|��Tv��mߴ#�v�3ڄ�MS)��9������@�kKg��-ڿ�����N.ch���^δ���N�r]m�U)ڷ	��7�5� ��m��6Y�d���'�jsT��L8�0M�4mы݁/>�n�Z���8�]ϙ�?�����b��\�k�z�g�g�>�
}��P�&���̏�[S�%>u������k�_��ݫ�m�����ł���+�����6u���Co�),F)�]�|�/��K�Ѯ�ߟy}/��rk�d9����ֶ��NB���)K�w�z}
��_^�����<�_@�?pY�^ŌU��9kv�jMy>����g��O�vy�P��eb�Jv���g�������Q�;�.���Y����Q*��wn��������]��1���q�E��"���٧�����i�`iݩO�Eg>T��^����;���)��>����z��$����ޱ��p��I:�b ��h�
```

---

### `objects/f5/c2e463fb9a5558b28982bb88774b7235974b80`

```
xK��OR055�`�����`����`8pfg���U�L��<�=�����>}C���N.%%�C�����8�+�AQ����q�<�YN,�,�j~''���dphb�Pd᜼{��ۊ��l��~�}���I�~��{�{��S.�޽��E���syy��M�l�eU����<��|�w���j��/��?```�o�R��d��,�c��\����g�`���Ռ?�0�l�{�S�x�g>�S��K��/��k�lPPW�4eeQH�l`Ȼ>?C�/�yW+���K_�e�Z�-�Y���Y�El:K���y6��Z���|�a��s��"K/��;�hT���+y������暝7������z�&͋y���dx�kl�'	FefF5���
)��ɗc>l5�! ���ՐS��a����G�b	�&͆ ���62`��G`�����¬&7��.l?�b�y�V��v�8E�P醇Oo|���J?��)�ŋ��_���^���i�#�=����͚EGm���?��cw-�p.�Ttp��69si���	_\&ޜ���w}+_�ӝ�ޜ�R�������1����o.Z� �d���ᗶ��5J-�>��A�s���ճ�+
%�Xg��/��m����k���6��Kw���%xp�9���Ң'2Ύ�Y�D�JM���E���ƠE�/]:27�d����s���_���˴���Z��/���5�n����НY����݅��:�Kk�q0j�YԼ2�{�"x�*���^�~?���Z�nN�z��t�U_�ݱ�w�52~�pT�`��Ɔ���?�6e%I81I���������/���)��ݹ;�y"�y8�\[	v>�V�]� r|�σ�G�&5&N�ci�Z6��z�C���?���q�����{_�nl�M�}z淥j�[�=�������g~�|~���:�l瓒���	��o�������+y7pE���{g����a��}F�����l�s(ɲX�k𒕞�]�l;�$6;�47,fq\��"�/��"q&�W�@���#U���.��\�k�K��zd���Z�hNhX�rf���*>��iw������߮hR^}�F⟝z��9稊}=�c�`v��?�&VۯϷ��/�����{��I/
S�\8f�ゟ������� ���ZD�W��3���F�E�����r�������[�r����ӫ�z�8��P�K��icuZ~i��o�n���tl�z�q��+�@b2;�&��������5��,p�z%ڔ���SW+\?�D�ĩ'���<��_x�X5��Js��-
d��Z���Hz����j7w�x\���ټræIsj�it�Z\th(��{&"��%�ȿ�?VM9�sV�OiNWu���'&�+����$��Y�٧]7XT
WNo�#��v��lf�<�� �Kh_��ax6kǎ$Fɻe�g�t���}����ڙ�kv�F�,�m^"���$��g��s��|��}��6o�{�Yl��e�"ǲ�����Y<�MU.W�^|�|�j�S��2�S��4fJi{%�<s�\�>�������_Y2emv]����'��W�ۇ��z����st6-`z&z-���C�ʟ��2ˮ�z��x���螅�A��]���p/jǅU��ȴ������x��J%�k�mN�ύ�x�z��Z�y��������`o���G�5e�.��yTH��L(^9K|Y�Q���l>;rRb��������~rh�p1��1�W�9wEnܼ���ݭJ�����o����ƛ<<��~,b���D���OL�ƍ,1G�SWk�O5�M1����.���ţ�3��A��V��p�k�3������J�^�3�Z��J�m���>U�w�G�-�d��{��訰�)n�.)u\h8#�����ٛ�|\:s�����ӽ��,5���*|J	VVVq9�NG������F�3�B��&r����׿9R������YG7I���cppg�JN��O��
�#�_�����h�5�k'�X�ږ$&6h{��U��~Q����0\����nd��	Z�"N�hn�>Y�l��@N��$������k�V���l�5�+Y�E�*S_�����yں'��;ڗ&^�)u�Q�}���/oZO������y�v��9�����[Z��I������v��"(���2ZLQd�?�k�Ĝ����g�0^�t�a��~�@���tN	gg���̑�oT���8��r����V��SwvL�:�3mq𪧕�>�����cǄ�?��!�ݜ�nQ<��"�M�ٮ�6^2����)s��nݿ����u�7z3಼y1bm�؋�u�+�>�6������_�OV������]٨;���_��ޤ9�Puj��Ҁ`�f��,847�p>��p�B�xG�ON�aG�U�S^85w�8�x����mQ��<o�$ǰ^����W�0�>����N��^q-g稹G����uh����xNG�������F�9n\6{岅[+�ծuu��-ն�������\澂7��i|S孫|��p�y��EÀ	%�	ZlҒA���f�쓐��p�)&�
���Pap���Zam��Y��ǫMvڍ�撿�V_v
�S_���/p����{�
;Ζ۱n�����"����.J�0ܓ+�X|�����Ovj�T��.�s����ʯ���o�������O�z���}����ˋ:��������Ů��a������z�ƥ�|,8+���W���M�_,.I����e�@��U��km;���^δ�_�x)��&�m�Z�,�ټl�<k���R�U_�z�ݍ�+�����]����G�	�z1�C�p�$��&)��3U_ki0�l��*v�*�$���Ebn�dʊ*���H��\�Ĩ��I�g7�Z'7�&��I�
��F-2u��*�z?[n��^u;O��Tn�3�t[fٝs6���>s[�J�]i�J*�EJ��][�^'����E�����f2
g�>5.��2cǅ���mo%���瑽�5X������K��_0e����f��m��1K,z��A�C��[T�H�0�l�˶�{��X-Y��7�N%.O�Xb/�#�Ĵݓ7�z�j�Q<���>&}����@�Y�}�qv�W���o�ycZ��}d��MG�<���9����&�~���S��䙖~߮�g�j����$����=�[�7vM�9å��3&0���y����ENV�~��".��PK���qO/il�U���-�ֳ��߽~r�b�� ��w.��^��5U�J���On6��wv&?�0h6�}�%S�n�gˆ�sҔ�v�)Y�l'�e�mO�G#뀩'�l(�[�-�H���W�o�ƾT�VaǊԜĪ�E�B�~���5��ɵ:�@GAFq��g{��/�?�|���\_�����e<
m��olhp��i��vS<��V)�^.!����kZÒ�{���M�r�}�W1�/�<��i�t&S%pO���7��>��K������KoHi}��V���?�;�Y����W@ތ��WOy�`n��L�k!k�ֺ����}�*�x�56���홫�?��:zD6��eb�6�����<��x��u�vE����Ӣ66�b���P��;�x+�l^^��o�䢂�I]W�׺~������,1]_uma83?��}�L�2���Hں7�,8{K�����l����-3�Zynӝ�p_��\u�3���
�DL�x�{�w�ۍ�'�XNu�!�����ʨua���̜���S[�wү-��R��tS�W�o����?���4Q\�ȖǓ;L���XTf������p������������k�~�l��1wM��
S��[���|Qg����RVd
��|vb��.�����=�`�>�#85��)N�eB�M	j]۾8�y���KZ��tu�L�)˟�T=n
��1&���ɴ��zzp�Y)ބ����OkmI������Ͽi.�r-c[r�k�L��g��l����������_�����ߴi�+�O3�5,��(|&q��Q�K�U����Lq�`5	���Z���f������Ǭ��ٷ:T�U�p�y�ک{�/�мʽ,��j��kO+�S��:暮�qg�k~���Q5W���w��=�������w�D�.7���dc�.���Y��:��h����yVK.�����m�-5�e;n��]4T
u��F��ׅ������/H.%f��o���g�8���κ���+��q_�.�L�q�5������%?���
�i�_��k��
����T_�)�w�ծ�n�)��]g�����lϾ�{�=�4=�Bl������N������Zk9O�Y2/�
^1c�ު�Ǆ���ͻ���Jm�$/Ý��A�GW��p[����u�R���{1+f)1� �>��k����dt]�g��YG��͑���L�L�<�|��Vi���5Z9_֬�q|�d�	�]}��V���l��ͽ[B~���H��M���]�k��"���Θ�,Oo���9��Uw��L{4'��|�[��Ik8�}����6�<Ʊ�\��cb����.��`���!6ZVx��^b��o��~����K[��g�����:�;o��+��K��̛�*6�:ӳ5�m[~��v���ϟ�����U���b�vQ�0��ߋV#c�Xeׂe*WҒtWNj��\�z���ѷ ��7ܢ��pZ�S.ϲv;���f��Sn{�ܻ��/�ˉ:�zT�ż���)MX��d���%���_G5�T����w�4ϻBR�C$�V�xxKhQ����̝̻N�Նe�n�8���m�O��e�i�+?=yV�U,{��dչ�pݿQ�a/s�M-�ڳB�mb��E�����F~�u���g��:qțxm��m'�jX�qq�G��_k�h�`8�s���mO���e�/��`[��;��
z�x�1ˤ4�Ug�zN;��:d�m�O��Ĳ<X�Rpη�g�-�&[}z�͝�ӂN�c��f�`˝9�WR�=<3+7p��kr�֛��x�-i��U��[Y7/�]�HFA����M��I׿���毭�Oמe���N�8<Xթ֪n�tU1�1d�ٛ�v�OjL��s�ǟ.U��?�m��p)���;���Է��5W�v$i]�ǼIu�9/m��xV���cm����̸�0yj􊰘7Ϯ��s?=�q�*/Z�7��Hl�d-��׎����j�Ÿ)�OT���n�{7���ӱv�����n�rS��f��?ݢ]�:6O+:��:z�N�w��_g��Uem�R����i�4�s�%��NN��	�g���E���R����)�;*Q���-+�h�1�D;O�J,��gN��t��M�Vz��V>}�})t��겉J��\�C��y*3�n��kk-�n*��>90)�҂G�_��wZ���+������P��}2�k�f�V�q��͞���j�Ϝ�j)˩����j�gh`��t r�;����C��� �͇�
```

---

### `refs/heads/main`

```
f98e2aadc6c005bec1fb566fa8e78d80e96b7368
```

---

### `refs/remotes/origin/HEAD`

```
ref: refs/remotes/origin/main
```

---

### `refs/remotes/origin/main`

```
840f8cc82b62fb85138943f5ffeec11a2439ca45
```

---

### `logs/HEAD`

```
0000000000000000000000000000000000000000 9391d7d4121cf149410bb194b80267c2a35ec984 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790454369 +0200	clone: from https://github.com/oguzzkd/englishclub.git
9391d7d4121cf149410bb194b80267c2a35ec984 6bca5bffaaaec3bfb72bc4d983f972ebdd168522 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790454772 +0200	commit: Added analytics
6bca5bffaaaec3bfb72bc4d983f972ebdd168522 f326469baf601c094b014d763651660de1bd8db5 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790847233 +0200	commit: implemented pronunciation-app
f326469baf601c094b014d763651660de1bd8db5 36798e7b98b2d69eab3cf3c57decaadf51ff310e Oguz Karaduman <ioguz.karaduman@gmail.com> 1790849137 +0200	commit: pronunciation-app: set initial scale to 80%
36798e7b98b2d69eab3cf3c57decaadf51ff310e f326469baf601c094b014d763651660de1bd8db5 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790849689 +0200	reset: moving to HEAD~1
f326469baf601c094b014d763651660de1bd8db5 840f8cc82b62fb85138943f5ffeec11a2439ca45 Oguz Karaduman <ioguz.karaduman@gmail.com> 1791183393 +0200	commit: updated event
840f8cc82b62fb85138943f5ffeec11a2439ca45 f98e2aadc6c005bec1fb566fa8e78d80e96b7368 Oguz Karaduman <ioguz.karaduman@gmail.com> 1791189948 +0200	commit: updated event info
```

---

### `logs/refs/remotes/origin/HEAD`

```
0000000000000000000000000000000000000000 9391d7d4121cf149410bb194b80267c2a35ec984 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790454369 +0200	clone: from https://github.com/oguzzkd/englishclub.git
```

---

### `logs/refs/remotes/origin/main`

```
9391d7d4121cf149410bb194b80267c2a35ec984 6bca5bffaaaec3bfb72bc4d983f972ebdd168522 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790454784 +0200	update by push
6bca5bffaaaec3bfb72bc4d983f972ebdd168522 f326469baf601c094b014d763651660de1bd8db5 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790847245 +0200	update by push
f326469baf601c094b014d763651660de1bd8db5 36798e7b98b2d69eab3cf3c57decaadf51ff310e Oguz Karaduman <ioguz.karaduman@gmail.com> 1790849145 +0200	update by push
36798e7b98b2d69eab3cf3c57decaadf51ff310e f326469baf601c094b014d763651660de1bd8db5 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790849714 +0200	update by push
f326469baf601c094b014d763651660de1bd8db5 840f8cc82b62fb85138943f5ffeec11a2439ca45 Oguz Karaduman <ioguz.karaduman@gmail.com> 1791183399 +0200	update by push
```

---

### `logs/refs/heads/main`

```
0000000000000000000000000000000000000000 9391d7d4121cf149410bb194b80267c2a35ec984 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790454369 +0200	clone: from https://github.com/oguzzkd/englishclub.git
9391d7d4121cf149410bb194b80267c2a35ec984 6bca5bffaaaec3bfb72bc4d983f972ebdd168522 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790454772 +0200	commit: Added analytics
6bca5bffaaaec3bfb72bc4d983f972ebdd168522 f326469baf601c094b014d763651660de1bd8db5 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790847233 +0200	commit: implemented pronunciation-app
f326469baf601c094b014d763651660de1bd8db5 36798e7b98b2d69eab3cf3c57decaadf51ff310e Oguz Karaduman <ioguz.karaduman@gmail.com> 1790849137 +0200	commit: pronunciation-app: set initial scale to 80%
36798e7b98b2d69eab3cf3c57decaadf51ff310e f326469baf601c094b014d763651660de1bd8db5 Oguz Karaduman <ioguz.karaduman@gmail.com> 1790849689 +0200	reset: moving to HEAD~1
f326469baf601c094b014d763651660de1bd8db5 840f8cc82b62fb85138943f5ffeec11a2439ca45 Oguz Karaduman <ioguz.karaduman@gmail.com> 1791183393 +0200	commit: updated event
840f8cc82b62fb85138943f5ffeec11a2439ca45 f98e2aadc6c005bec1fb566fa8e78d80e96b7368 Oguz Karaduman <ioguz.karaduman@gmail.com> 1791189948 +0200	commit: updated event info
```

---

