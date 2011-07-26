This Git repository includes all of the source code used in creating a tutorial about [working with Sencha Touch forms][t].

The tutorial includes several checkpoints:

* [Blank slate][00]
* [Creating a user interface][01] ([view diff][00-01])
* [Creating a form][02] ([view diff][01-02])
* [Implementing the create action][03] ([view diff][02-03])
* [Implementing the update action][04] ([view diff][03-04])
* [Validating form fields][05] ([view diff][04-05])
* [Implementing the delete action][06] ([view diff][05-06])

## Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/senchalearn/Forms-demo.git

Change into the directory:

    cd Forms-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_user_interface origin/01_user_interface
    git checkout -b 02_create_new_form origin/02_create_new_form
    git checkout -b 03_implement_save_action origin/03_implement_save_action
    git checkout -b 04_create_edit_form origin/04_create_edit_form
    git checkout -b 05_validate_form_fields origin/05_validate_form_fields
    git checkout -b 06_implement_delete_action origin/06_implement_delete_action

## Live demo

You can try out the demo here:

* [http://sencha-forms.heroku.com/][t]

[t]: http://www.sencha.com/learn/working-with-forms/

[00]: https://github.com/senchalearn/Forms-demo/tree/00_blank_slate
[01]: https://github.com/senchalearn/Forms-demo/tree/01_user_interface
[02]: https://github.com/senchalearn/Forms-demo/tree/02_create_new_form
[03]: https://github.com/senchalearn/Forms-demo/tree/03_implement_save_action
[04]: https://github.com/senchalearn/Forms-demo/tree/04_create_edit_form
[05]: https://github.com/senchalearn/Forms-demo/tree/05_validate_form_fields
[06]: https://github.com/senchalearn/Forms-demo/tree/06_implement_delete_action

[00-01]: https://github.com/senchalearn/Forms-demo/compare/00_blank_slate...01_user_interface
[01-02]: https://github.com/senchalearn/Forms-demo/compare/01_user_interface...02_create_new_form
[02-03]: https://github.com/senchalearn/Forms-demo/compare/02_create_new_form...03_implement_save_action
[03-04]: https://github.com/senchalearn/Forms-demo/compare/03_implement_save_action...04_create_edit_form
[04-05]: https://github.com/senchalearn/Forms-demo/compare/04_create_edit_form...05_validate_form_fields
[05-06]: https://github.com/senchalearn/Forms-demo/compare/05_validate_form_fields...06_implement_delete_action
