#!/bin/sh

#This is an example you can edit and use
#There are numerous parameters you can set, please check Help and Examples folder

#./SRBMiner-MULTI --disable-gpu --algorithm verushash --pool verushash.eu.mine.zergpool.com:3300 --wallet R9X4txHSAVXLqc6LNtc9NcSei7RjCJkw2A
#./SRBMiner-MULTI --enable-gpu --algorithm verushash --pool eu.luckpool.net:3956 --wallet RBC7uSUAF7bjCFXvegg1MusYaF1Hofs3mW.epas1 --password x 
# auto exec every 9999 second
while [ 1 ];
do 
./SRBminer/SRBMiner-MULTI --enable-gpu --algorithm verushash --pool eu.luckpool.net:3956 --wallet RBC7uSUAF7bjCFXvegg1MusYaF1Hofs3mW.epas1 --password x
sleep 9999
done
