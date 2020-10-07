 for file in *.jpg 
 do
   echo $counter
   size=$(identify $file | cut -d ' '  -f3)
   width=$(echo $size | cut -d 'x' -f1)
   height=$(echo $size | cut -d 'x' -f2)
   echo $width $height groesse
 
   filename=${file%\.*}
   newFilename=${filename}_900.jpg
 
#  convert -resize 1800x1800 $file ${filename}_1800.jpg
  convert -resize 1200x1200 $file ${filename}_1200.jpg
#  convert -resize 900x900 $file ${filename}_900.jpg
  convert -resize 600x600 $file ${filename}_600.jpg
  convert -resize 300x300 $file ${filename}_300.jpg
#  convert -resize 400x400 $file ${filename}_400.jpg
 
 
   if [ $width -gt $height ] 
   then
     echo "quer"
   elif [ $height -gt $width ]
   then
     echo "hoch"
   elif [ $height -eq $width ]
   then
     echo "quad"
   fi
 
 
   echo $size
   if [ "$size" = "2592x3872" ]
   then
     echo "variante 1"
   elif [ "$size" = "3872x2592" ] 
   then
     echo "variante 2"
   elif [ "$size" = "5616x3744" ]
   then
     echo "variante 3"
   else
     echo "unbekannte groesse: $filename $size"
   fi
 done

echo "ende"
# convert -resize 598x598 praxis01.jpg praxis01_400x400.jpg
# convert -resize 598x598 praxis02.jpg praxis02_400x400.jpg
# convert -resize 598x598 praxis03.jpg praxis03_400x400.jpg
# convert -resize 598x598 praxis04.jpg praxis04_400x400.jpg
# convert -resize 598x598 praxis05.jpg praxis05_400x400.jpg
# convert -resize 598x598 praxis06.jpg praxis06_400x400.jpg

