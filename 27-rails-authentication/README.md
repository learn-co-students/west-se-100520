# Auth in Rails

![](https://media.giphy.com/media/y0s36prnnGb5u/giphy.gif)

## Objectives

- Understand, theoretically, how authentication and authorization work
  - Understand the _difference_ between authentication and authorization and how they fit under the umbrella topic
    _auth_
- Discuss different encryption and hashing schemes, and `bcrypt` specifically
  - Do we want to ever store plaintext user passwords? (no)
- Augment a user model in rails using `bcrypt`, `password_digest`, and `has_secure_password`
- Build User sign up and sign in flows in Rails
- Review sessions and cookies, as well as implement sign up, log in, and log out

## Steps

### How does auth work in theory?

##### What is the difference between sign-in and sign up?

Sign-up happens once, and afterwards the information that is used to authenticate a user exists in the system for
sign-in.

Sign-up corresponds to _creating_ a new user. Sign-in is authenticating an already existing user with some identifying
piece of information.

##### What is authentication?

It boils down to a really interesting question: _Are you who you say you are?_ And we use the username/password as a
proxy for that. This is called [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication):
a method for confirming a user's identity via multiple pieces (factors) of identification, such as a username/password
that only the user has. Ideally, our users provide unique passwords for each site they sign up for and don't use
[common passwords](https://www.huffingtonpost.com/entry/2016-most-common-passwords_us_587f9663e4b0c147f0bc299d), but
that's not always the case.

##### What is the difference between Authentication and Authorization?

Authorization happens after authentication. It's about scope, and specific information. _What is the user allowed to
see/interact with?_; what is the user **authorized** to see? Simply proving your identity does not mean you have
unlimited power or authority; providing my driver's license to the TSA may prove my identity but it doesn't mean I'm
**authorized** to fly the plane.

![POWER! UNLIMITED POWER](https://media.giphy.com/media/xUA7ba9aksCuKR9dgA/giphy.gif)

---

##### How do passwords work?

Do websites save our passwords? And if they do, how are they stored? Should a plaintext password ever be stored?

##### What is the difference between hashing and encrypting?

Encryption lets us turn some string of information into another, random-looking string. That's it - it just garbles the information. 'Good' encryption has two key properties.

1. No one can tell what was in the original message. (No one without the secret key, that is!)
2. No one can change the information in the encrypted message.

These are called security against _eavesdropping_ and _tampering_, respectively.

Hashing is a little different: the ultimate goal of one-way hashing is that it cannot be feasibly reversed. Like putting something through a meat grinder or a paper shredder, we cannot reverse the process. This means that no one, not even those doing the hashing, are able to reverse the process.
Hiding this information from ourselves is good. Having access to the actual passwords is a dangerous liability! If someone had access to our database, then they would have the passwords associated with lots of email addresses, which would mean they could steal a ton of people's identities. People are bad at using new passwords for each website, so your password database likely contains people's gmail passwords!

![](https://media.giphy.com/media/fcaN0b9yGcwbm/giphy.gif)

#### Deep Dive into BCrypt and `has_secure_password`

- `BCrypt` allows us to [salt](<https://en.wikipedia.org/wiki/Salt_(cryptography)>) users' plaintext passwords before
  running them through a [hashing function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). A hashing
  function is, basically, a _one way_ function. Similar to putting something in a meat grinder; we cannot _feasibly_
  reconstruct something that's been ground up by a meat grinder. We then store these passwords that have been 'digested'
  by `BCrypt` in our database.
  **[Never ever ever store your users' plaintext passwords in your database](https://blog.mozilla.org/webdev/2012/06/08/lets-talk-about-password-storage/).
  It's bad form and should be avoided at all costs.**

### Using `bcrypt` to create passwords in Rails

What's cool about `bcrypt`? By design, it's slow. This means that anyone who wants to crack it has to take a long time
to brute-force passwords. It also allows you to define a column called `password_digest` and it will do the rest of the
work.

_Remember, convention over configuration._ And especially in this case, we generally don't have the time or energy to
build our own encryption that surpasses what already exists.

After installing the `bcrypt` gem, you can use a macro in your `user` model called `has_secure_password`, which does a
lot of the integration for you. Go in and test this in the console. You can show how the `user` model ends up with a
`password_digest` attribute even though you send in `password` through the `create`. Do it again, this time with a
`password_confirmation` in the initialization hash. You can show how rails rejects the transaction.

### Sessions and cookies

How does an application keep you logged in between requests? Remember, requests are stateless, so sessions allow us to
provide a user a sense of continuity as the interact with the website.

How do cookies fit into this? Ultimately, they're just key-value pairs. Each website has it's own cookies. Cookies
aren't secure, because they're not necessarily encrypted. We want to limit the amount and type of information stored in
cookies. Rails automatically stores and encrypts the session id in our cookie.

What information do we want to store in the cookie?

Sessions aren't really stored in the database, so we don't use a model for them. However, they still need routes, a
controller and view

## External Resources:

- [Multi-factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)
- [Huffington Post List of Common Passwords](https://www.huffingtonpost.com/entry/2016-most-common-passwords_us_587f9663e4b0c147f0bc299d)
- [BCrypt gem on github](https://github.com/codahale/bcrypt-ruby#why-you-should-use-bcrypt)
- [BCrypt Password class source code](https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb#L23)
- [Rails Docs on security](https://guides.rubyonrails.org/security.html#sessions)
- [Rails Docs on has_and_belongs_to_many](https://guides.rubyonrails.org/association_basics.html#the-has-and-belongs-to-many-association)
