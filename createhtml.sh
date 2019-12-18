dest='predist/'
pre='pre.html'
post='post.html'
rm -r $dest/*.*
for page in src/Pages/* 
do 
  filename=$dest${page##*/}
  cat $pre > $filename
  cat $page >> $filename
  cat $post >> $filename
done
