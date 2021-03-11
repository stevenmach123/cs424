
library(ggplot2)
library(lubridate)
library(reshape2)

lote<- read.table(file = "2018_datav2.csv", sep = ",",skipNul="TRUE",header = TRUE)

#lote<-read.table(file = "~/Documents/SP2021/CS424/annual_aqi_by_county_2019.xlsx",sep = ",", header = TRUE)

lote1 <- subset(lote,Coal !="");
lote1 <- lote1[names(lote1) !="Year"]



lote1["Coal"]<-gsub(",","",lote1$Coal,fixed=TRUE)

lote1$Coal<-gsub(",","",lote1$Coal,fixed=TRUE)
lote1$Oil <-gsub(",","",lote1$Oil,fixed=TRUE)
lote1$Gas <- gsub(",","",lote1$Gas,fixed=TRUE)
lote1$Nuclear <- gsub(",","",lote1$Nuclear,fixed=TRUE)
lote1$Hydro <- gsub(",","",lote1$Hydro,fixed=TRUE)
lote1$Biomass<- gsub(",","",lote1$Biomass,fixed=TRUE)
lote1$Wind <- gsub(",","",lote1$Wind,fixed=TRUE)
lote1$Solar <- gsub(",","",lote1$Solar,fixed=TRUE)
lote1$Geo <- gsub(",","",lote1$Geo,fixed=TRUE)
lote1$Other1 <- gsub(",","",lote1$Other1,fixed=TRUE)
lote1$Other2 <- gsub(",","",lote1$Other2,fixed=TRUE)
names(lote1)[names(lote1) =="Plant.latitude" ] <- "Lat"

lote11<-lote1  
lote11 <-melt(data = lote1,id.vars=c("State","Plant","Long","Lat"))
lote11$value<-as.numeric(lote11$value)
lote11$value<- ifelse(lote11$value<0,0,lote11$value)
lote12 <-dcast(lote11,State+Plant+Long+Lat~variable)
lote13 <-lote12
lote13$Other <-ifelse(lote12$Other1==0,lote12$Other2,lote12$Other1) 
lote13<-lote13[names(lote12) !="Other1" & names(lote12) !="Other2"] 


lote13<-subset(lote13,State == "IL") 
leaflet(lote13[1:20,]) %>% addTiles() %>% addMarkers(lng=~Long,lat=~Lat)

