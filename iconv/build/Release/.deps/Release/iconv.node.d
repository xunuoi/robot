cmd_Release/iconv.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/iconv.node Release/obj.target/iconv/src/binding.o Release/obj.target/iconv/deps/libiconv/lib/iconv.o 