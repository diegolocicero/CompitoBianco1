import React, { Component, useState } from "react";
import {motion} from 'framer-motion'
import Header from "../header/header";
import Card from "../card/card";
import ContentWrapper from "../contentWrapper/contentWrapper";
import './contentPage.css'
//IMPORT IMMAGINI
import processiBg from '../../Img/ProcessiBg.jpg'
import threadBg from '../../Img/ThreadBg.avif'
import semaforiBg from '../../Img/SemaforiBg.jpg'
import deadlockBg from '../../Img/DeadlockBg.jpg'

function ContentPage() {
  const [isTranslating1, setIsTranslating1] = useState(false)
  const [isTranslating2, setIsTranslating2] = useState(false)
  const [isTranslating3, setIsTranslating3] = useState(false)
  const [isTranslating4, setIsTranslating4] = useState(false)
  const text = 'palle \n palle'
  return (
      <>
      <div onClick={() => {
        if(isTranslating1)
          setIsTranslating1(!isTranslating1)
        if(isTranslating2)
          setIsTranslating2(!isTranslating2)
        if(isTranslating3)
          setIsTranslating3(!isTranslating3)
        if(isTranslating4)
          setIsTranslating4(!isTranslating4)
      }}>
        <Header/>
      </div>
        <motion.div style={{marginTop: -5 + 'rem'}}
          animate={{translateX: isTranslating1? 0 : 100 + '%'}}
          initial={{translateX: 100 + '%'}}
          transition={{type: 'keyframes'}}
        >
          <ContentWrapper
            image={processiBg}
            title='I PROCESSI'
            text="Un processo è un programma in esecuzione ed ha lo scopo di  permetterci di suddividere una singola CPU fisica 
            in più CPU virtuali, permettendo la multiprogrammazione, cioè l'esecuzione di più compiti (processi) 'contemporaneamente', 
            anche se realmente nulla avviene in simultaneo, semplicemente la CPU è talmente veloce da farci sembrare di stare eseguendo 
            più cose in contemporaneo. Ogni processo ha accesso ad:
            area codice, PCB, area di controllo file, area dati, stack e registri"
          />
        </motion.div>
        
        <motion.div style={{marginTop: -5 + 'rem'}}
          animate={{translateX: isTranslating2? 0 : 100 + '%'}}
          initial={{translateX: 100 + '%'}}
          transition={{type: 'keyframes'}}
        >
          <ContentWrapper
            image={threadBg}
            title='I THREAD'
            text="Un THREAD è un flusso di esecuzione appartenente ad un processo, ogni THREAD ha a disposizione: PCI, registri e lo stack. 
            Un vantaggio dei THREAD è che il context-switch tra di essi è molto più veloce di quello tra processi dato che i thread
            condividono tra di loro porzioni di memoria (codice e dati) che nel context-switch non devono essere cambiati, il context-switch tra
            THREAD avviene in questo modo: il sistema operativo salva i dati del thread corrente nella THREAD TABLE, poi carica nella CPU il nuovo thread
            Una caratteristica dei THREAD è che non vi è protezione tra di essi, difatti ogni thread può leggere, scrivere e cancellare 
            lo stack degli altri THREAD.
            Un THREAD può assumere vari stati: Ready (pronto ad essere eseguito), Running (in esecuzione), Sleeping (messo in attesa dal programmatore),
            Waiting (messo in attesa da un altro thread o processo), Blocked (in attesa di un input o di un output, Dead (terminato).
            Su un THREAD si possono svolgere le seguenti operazioni: 
            create = crea un nuovo thread
            exit = un thread termina se stesso
            join = un thread sincronizza la propria fine con un thread passato come parametro
            yeld = un thread rilascia se stesso dalla CPI
            sleep = un thread viene bloccato per un determinato periodo di tempo
            Ci sono due tipi di thread: Foreground: quando il thread principale termina attende la fine di tutti gli altri thread foreground
            Background: al termine del thread principale terminano anche i thread background
            I THREAD possono essere gestiti:
            a livello utente, che deve però essere supportata dal SO, ha il vantaggio di non dover eseguire la TRAP (passaggio da modalità utente a kernel), 
            passaggio che richiede tempo e risorse ma al contempo ha lo svantaggio che quando un THREAD va in attesa tutto il processo viene deallocato dalla CPU
            dato che il SO lo riconosce come un unico processo e non come molti THREAD
            
            a livello kernel, il quale è direttamente gestita dal SO e tutti i dati dei processi sono presenti nello spazio kernel, ha il vantaggio che tutte
            le chiamate bloccanti non bloccano gli altri thread fratelli ma come svantaggio ha un context-switch notevolmente più lento, dovendo eseguire
            la TRAP
            
            o come modello ibrido in cui il programmatore sceglie quali thread gestire a livello kernel e quali a livello utente"
          />
        </motion.div>

        <motion.div style={{marginTop: -5 + 'rem'}}
          animate={{translateX: isTranslating3? 0 : 100 + '%'}}
          initial={{translateX: 100 + '%'}}
          transition={{type: 'keyframes'}}
        >
          <ContentWrapper
            image={semaforiBg}
            title='I SEMAFORI'
            text='zio pera' //! DA FARE
          />
        </motion.div>

        <motion.div style={{marginTop: -5 + 'rem'}}
          animate={{translateX: isTranslating4? 0 : 100 + '%'}}
          initial={{translateX: 100 + '%'}}
          transition={{type: 'keyframes'}}
        >
          <ContentWrapper
            image={deadlockBg}
            title='LE DEADLOCK'
            text='zio pera'
          />
        </motion.div>

        <motion.div className="pageContainer">
          <div 
            onClick={() => {
              setIsTranslating1(!isTranslating1)
              if(isTranslating2)
                setIsTranslating2(!isTranslating2)
              if(isTranslating3)
                setIsTranslating3(!isTranslating3)
              if(isTranslating4)
                setIsTranslating4(!isTranslating4) 
            }}
          >
            <Card
              title='Processi'
              background={processiBg}
            />
          </div>

          <div onClick={() => {
            setIsTranslating2(!isTranslating2)
            if(isTranslating1)
              setIsTranslating1(!isTranslating1)
            if(isTranslating3)
              setIsTranslating3(!isTranslating3)
            if(isTranslating4)
              setIsTranslating4(!isTranslating4)       
          }}>
            <Card
              title='Thread'
              background={threadBg}
            />    
          </div>

          <div onClick={() => {
            setIsTranslating3(!isTranslating3)
            if(isTranslating1)
              setIsTranslating1(!isTranslating1)
            if(isTranslating2)
              setIsTranslating2(!isTranslating2)
            if(isTranslating4)
              setIsTranslating4(!isTranslating4) 
          }}>
            <Card
              title='Semafori'
              background={semaforiBg}
            />   
          </div>

          <div onClick={() => {
            setIsTranslating4(!isTranslating4)
            if(isTranslating1)
              setIsTranslating1(!isTranslating1)
            if(isTranslating2)
              setIsTranslating2(!isTranslating2)
            if(isTranslating3)
              setIsTranslating3(!isTranslating3) 
          }}>
            <Card
              title='Deadlock'
              background={deadlockBg}
            />   
          </div>  

        </motion.div>
      </>
    );  
}

export default ContentPage;