namespace music {
    /**
     * Sets the tempo (in beats per minute) of a song.
     * @param song the song to change the tempo of
     * @param bpm the new tempo in beats per minute
     */
    //% block="set song $song bpm to $bpm" blockId=music_set_bpm
    //% song.shadow=music_song_field_editor
    //% bpm.min=0 bpm.max=65535 bpm.defl=120
    //% group="Songs"
    //% weight=40
    export function setBPM(song: music.Playable, bpm: number) {
        if (song instanceof music.sequencer.Song) {
            if (song.buf.isReadOnly()) song.buf = song.buf.slice()
            song.buf.setNumber(NumberFormat.UInt16LE, 1, bpm)
        }
    }
}
