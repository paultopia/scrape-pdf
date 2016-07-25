(defproject pdfio "0.1.0-SNAPSHOT"
  :description "experiments with getting pdfs in and out of base 64, getting text, etc. in clj"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.codec "0.1.0"]
                 [pdfboxing "0.1.9"]]
  :main ^:skip-aot pdfio.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
