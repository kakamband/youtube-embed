# Youtube Embed

The script read all link tag and replace Youtube links by video iFrame.
the height of the video is calculated according to the 16/9 ratio.

## Installation

Add tag script with the link to the script before closure.

```bash
YOUR HTML 

<script src='YOUR-PATH'></script>

</body>
```

## custom size

You can define a custom size in one or any links. You muste add "data-width" attribute to the link.

```bash
YOUR HTML 

<a href="httpd://youtube.com/" data-width="400">link to my video</a>

</body>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU GENERAL PUBLIC LICENSE](https://choosealicense.com/licenses/agpl-3.0/)
