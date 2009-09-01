require 'rubygems'
require 'yui/compressor'  # sudo gem install sstephenson-yui-compressor
require "zlib"

compressor = YUI::JavaScriptCompressor.new

replacements = {
        :class_     => :c,
        :gecko_     => :g,
        :webkit_    => :w,
        :safari_    => :s,
        :konqueror_ => :k,
        :chrome_    => :ch,
        :freebsd_   => :f,
        :mac_       => :m,
        :linux_     => :l,
        :iphone_    => :i,
        :ipod_      => :p,
        :webtv_     => :wv,
        :win_       => :wn,
        }

file_name = "css_browser_selector"

File.open("#{file_name}.js", "r") do |source|
  src = source.read
  replacements.each_pair do |var_name, short_var_name|
    src.gsub! var_name.to_s, short_var_name.to_s
  end

  File.open("#{file_name}.min.js", 'w') do |min|
    Zlib::GzipWriter.open("#{file_name}.min.js.gz") do |gzip|
      compressor.compress(src) do |compressed|
        while buffer = compressed.read(4096)
          gzip.write(buffer)
          min.write(buffer)
        end
      end
    end
  end
end
