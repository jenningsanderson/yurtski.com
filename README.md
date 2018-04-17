# yurtski.com
Dev repo for yurtski.com; publish script copies _site contents to www.yurtski.com

This is a jekyll website, be sure you have Jekyll installed.

```
gem install jekyll
```

## Running
```
jekyll serve
```

Then open http://locahost:4000


## Publishing
Note: You'll need credentials to access www.yurstki.com; contact jennings.anderson@gmail.com.
```
./publish.sh
```


## Timed Publishing
Edit `timed-publish.py` to the date you'd like to publish to and then run: 
```
./timed-publish.py
```
This will check every 5 seconds for that date to pass and then run ./publish.sh when it does.

