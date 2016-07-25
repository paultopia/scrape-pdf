(ns pdfio.core
  (:require [clojure.data.codec.base64 :as b64]
            [pdfboxing.text :as text]
            [clojure.java.io :as io]))

(defn pdf-binary-file-to-b64-file [pdf-filename outfile]
  (with-open [in (io/input-stream pdf-filename)
              out (io/output-stream outfile)]
    (b64/encoding-transfer in out)))

(defn b64-file-to-binary-pdf-file [b64-filename outfile]
  (with-open [in (io/input-stream b64-filename)
              out (io/output-stream outfile)]
    (b64/decoding-transfer in out)))

;; (defn extract-text-from-b64)
